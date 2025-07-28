export default function HeroSection() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Aurora Background - Coming down from top like demo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue via-pink to-transparent">
        {/* Primary Aurora Layer - Top-focused */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_70%)] aurora-layer"></div>
        
        {/* Secondary Aurora Layer - Top-focused */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_60%)] aurora-layer" style={{animationDelay: '2s'}}></div>
        
        {/* Tertiary Aurora Layer - Top-focused */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_80%)] aurora-layer" style={{animationDelay: '4s'}}></div>
        
        {/* Glow Effect - Top-focused */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_90%)] aurora-glow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Hero content will be added here */}
      </div>
    </section>
  );
} 