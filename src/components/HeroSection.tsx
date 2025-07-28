import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Aurora colors (PRD palette)
    const colors = [
      { r: 57, g: 113, b: 249 },   // Blue #3971F9
      { r: 217, g: 116, b: 251 },  // Pink #D974FB
      { r: 248, g: 68, b: 7 }      // Red #F84F07
    ];

    let time = 0;
    const speed = 1;
    const blend = 0.5;

    const animate = () => {
      time += 0.01 * speed;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      
      // Add color stops with animation
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1)) + Math.sin(time + index) * 0.1;
        const alpha = 0.3 + Math.sin(time * 2 + index) * 0.2 * blend;
        
        gradient.addColorStop(
          Math.max(0, Math.min(1, offset)),
          `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
        );
      });

      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add aurora glow effect
      const glowGradient = ctx.createRadialGradient(
        canvas.width * 0.5, 0, 0,
        canvas.width * 0.5, 0, canvas.height * 0.8
      );
      
      glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      glowGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
      glowGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
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