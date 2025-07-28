export default function HeroSection() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue via-pink to-red">
        {/* Primary Aurora Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_50%)] aurora-layer"></div>
        
        {/* Secondary Aurora Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08),transparent_40%)] aurora-layer" style={{animationDelay: '2s'}}></div>
        
        {/* Tertiary Aurora Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)] aurora-layer" style={{animationDelay: '4s'}}></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] aurora-glow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Hero content will be added here */}
      </div>
    </section>
  );
} 