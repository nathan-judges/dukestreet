"use client";

import { useEffect, useRef, useMemo } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

interface AuroraProps {
  children: React.ReactNode;
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export default function Aurora({ 
  children, 
  colorStops = ["#3971F9", "#D974FB", "#F84F07"],
  blend = 0.25, // Reduced for more subtlety
  amplitude = 0.3, // Reduced for gentler waves
  speed = 0.12 // Slightly slower for more elegant movement
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);

  // Convert hex colors to RGB
  const colors = useMemo(() => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
      } : { r: 0, g: 0, b: 0 };
    };
    return colorStops.map(hexToRgb);
  }, [colorStops]);

  // Create shader source with current colors
  const shaderSource = useMemo(() => {
    const vertex = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0, 1);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uBlend;
      uniform float uAmplitude;
      uniform float uSpeed;
      
      // Smooth noise function for gentler aurora effect
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      float fractalNoise(vec2 p) {
        float value = 0.0;
        float amplitude = uAmplitude;
        float frequency = 1.0;
        
        for(int i = 0; i < 4; i++) { // Increased iterations for more detail
          value += amplitude * smoothNoise(p * frequency);
          amplitude *= 0.5; // Reduced decay for smoother transitions
          frequency *= 2.0; // Increased frequency scaling
        }
        
        return value;
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 p = (uv - 0.5) * 2.0;
        
        float time = uTime * uSpeed;
        
        // Create very gentle flowing aurora effect
        vec2 flow = vec2(
          fractalNoise(p * 2.0 + vec2(time * 0.2, time * 0.15)),
          fractalNoise(p * 2.0 + vec2(time * 0.25, time * 0.2))
        );
        
        float aurora = fractalNoise(p * 2.5 + flow * 0.2 + vec2(time * 0.08, time * 0.15));
        
        // Create very subtle gradient based on position
        float gradient = smoothstep(-1.5, 1.5, p.x + aurora * 0.08);
        float height = smoothstep(-1.2, 1.0, p.y + aurora * 0.04);
        
        // Blend colors very smoothly
        vec3 color1 = vec3(${colors[0].r}, ${colors[0].g}, ${colors[0].b});
        vec3 color2 = vec3(${colors[1].r}, ${colors[1].g}, ${colors[1].b});
        vec3 color3 = vec3(${colors[2].r}, ${colors[2].g}, ${colors[2].b});
        
        vec3 color = mix(color1, color2, gradient);
        color = mix(color, color3, height);
        
        // Add very subtle aurora variation
        color += aurora * 0.03 * (color2 - color1);
        
        // Very soft edges and transparency
        float edge = smoothstep(2.0, 0.1, length(p));
        float alpha = edge * uBlend * (0.12 + aurora * 0.08);
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    return { vertex, fragment };
  }, [colors]);

  // Update uniforms when props change
  useEffect(() => {
    if (programRef.current) {
      programRef.current.uniforms.uBlend.value = blend;
      programRef.current.uniforms.uAmplitude.value = amplitude;
      programRef.current.uniforms.uSpeed.value = speed;
    }
  }, [blend, amplitude, speed]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, alpha: true });
    const gl = renderer.gl;

    rendererRef.current = renderer;

    const program = new Program(gl, shaderSource);
    programRef.current = program;

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    // Set uniforms
    program.uniforms.uTime = { value: 0 };
    program.uniforms.uResolution = { value: new Vec2(canvas.width, canvas.height) };
    program.uniforms.uBlend = { value: blend };
    program.uniforms.uAmplitude = { value: amplitude };
    program.uniforms.uSpeed = { value: speed };

    // Animation loop
    let animationId: number;
    const animate = (time: number) => {
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
      animationId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      program.uniforms.uResolution.value.set(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      // Clean up WebGL context
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [shaderSource]);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 