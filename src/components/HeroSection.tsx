import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawAurora = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      
      // Aurora colors (PRD palette)
      const colors = [
        { r: 57, g: 113, b: 249 },   // Blue #3971F9
        { r: 217, g: 116, b: 251 },  // Pink #D974FB
        { r: 248, g: 68, b: 7 }      // Red #F84F07
      ];

      colors.forEach((color, i) => {
        const offset = (i / (colors.length - 1)) + Math.sin(time + i) * 0.1;
        const alpha = 0.3 + Math.sin(time * 2 + i) * 0.2;
        
        gradient.addColorStop(
          Math.max(0, Math.min(1, offset)),
          `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
        );
      });

      // Fill only top portion
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height * 0.6);

      // Add glow effect
      const glowGradient = ctx.createRadialGradient(
        width * 0.5, 0, 0,
        width * 0.5, 0, height * 0.4
      );
      
      glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      glowGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
      glowGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height * 0.6);

      time += 0.01;
      animationId = requestAnimationFrame(drawAurora);
    };

    resizeCanvas();
    drawAurora();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Aurora Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Hero content will be added here */}
      </div>
    </section>
  );
} 