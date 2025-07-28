import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    // Initial resize with small delay to ensure DOM is ready
    setTimeout(resizeCanvas, 100);
    window.addEventListener('resize', resizeCanvas);

    // Aurora colors (PRD palette) - more vibrant
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
      
      // Create gradient - horizontal arrangement
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      
      // Add color stops with animation - more vibrant
      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1)) + Math.sin(time + index) * 0.1;
        const alpha = 0.6 + Math.sin(time * 2 + index) * 0.3 * blend; // Increased base alpha
        
        gradient.addColorStop(
          Math.max(0, Math.min(1, offset)),
          `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
        );
      });

      // Fill with gradient - only top portion
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6); // Only top 60%

      // Add aurora glow effect - more pronounced
      const glowGradient = ctx.createRadialGradient(
        canvas.width * 0.5, 0, 0,
        canvas.width * 0.5, 0, canvas.height * 0.4
      );
      
      glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)'); // Increased opacity
      glowGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
      glowGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.05)');
      glowGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.6); // Only top 60%

      requestAnimationFrame(animate);
    };

    // Start animation after resize
    setTimeout(animate, 150);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Aurora Background Canvas - positioned at top */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Hero content will be added here */}
      </div>
    </section>
  );
} 