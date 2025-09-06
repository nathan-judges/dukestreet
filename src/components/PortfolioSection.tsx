import { useState, useEffect, useRef } from 'react';
import { Squircle } from 'corner-smoothing';

export default function PortfolioSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // ReactBits card-swap settings
  const settings = {
    pauseOnHover: true,
    cardDistance: 60,
    verticalDistance: 70,
    delay: 5000,
    skewAmount: 12
  };

  useEffect(() => {
    if (isHovered && settings.pauseOnHover) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, settings.delay);

    return () => clearInterval(interval);
  }, [isHovered]);

  const cards = [
    {
      id: 1,
      title: "Bonafide Podcast",
      backgroundImage: "/bonafide-cover.jpg",
      url: "https://www.lukebona.com.au/"
    },
    {
      id: 2,
      title: "ByStorm Beauty",
      backgroundImage: "/bystorm-cover.jpg",
      url: "https://bystormbeauty.com/"
    },
    {
      id: 3,
      title: "Barefaced",
      backgroundImage: "/barefaced-cover.jpg",
      url: "https://barefaced.substack.com?utm_source=navbar&utm_medium=web"
    }
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="responsive-portfolio-padding responsive-portfolio-layout responsive-portfolio-height responsive-portfolio-radius"
      style={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        background: '#000510'
      }}
    >
      {/* Left Column - Text Content */}
      <div style={{ flex: 1 }}>
        <h2
          ref={titleRef}
          className="responsive-portfolio-title hero-fade-up"
          style={{
            color: '#F9F7F1',
            fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            margin: '0 0 48px 0'
          }}
        >
          Why choose us
        </h2>
        <p
          ref={textRef}
          className="responsive-portfolio-text hero-fade-up"
          style={{
            color: '#F9F7F1',
            fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            opacity: 0.72,
            margin: 0,
            maxWidth: '500px'
          }}
        >
          Your business is unique & so is our approach. We deliver tailored, human-centred design that is as functional as it is beautiful. We focus on long-term solutions, ensuring your brand evolves with you.
        </p>
      </div>

      {/* Right Column - Card Swap Component */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div 
          className="responsive-card-container" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cards.map((card, index) => {
            const isActive = index === activeCard;
            const isNext = index === (activeCard + 1) % 3;
            const isPrev = index === (activeCard - 1 + 3) % 3;
            
            // Mobile-optimized transform distances
            const isSmall = typeof window !== 'undefined' && window.innerWidth < 768;
            const cardDistance = isSmall ? 30 : settings.cardDistance;        // 30px vs 60
            const verticalDistance = isSmall ? 40 : settings.verticalDistance; // 40px vs 70
            const skew = isSmall ? 8 : settings.skewAmount;                   // 8deg vs 12
            
            let transform = '';
            let zIndex = 1;
            let opacity = 0.3;
            
            if (isActive) {
              transform = 'translate(0, 0) scale(1) rotate(0deg)';
              zIndex = 3;
              opacity = 1;
            } else if (isNext) {
              transform = `translate(-${cardDistance}px, -${verticalDistance}px) scale(0.9) rotate(${skew}deg)`;
              zIndex = 2;
              opacity = 0.7;
            } else if (isPrev) {
              transform = `translate(${cardDistance}px, ${verticalDistance}px) scale(0.9) rotate(-${skew}deg)`;
              zIndex = 1;
              opacity = 0.5;
            }

            return (
              <Squircle
                key={card.id}
                cornerRadius={24}
                cornerSmoothing={0.6}
                className="responsive-card responsive-card-mobile-bottom"
                style={{
                  position: 'absolute',
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: transform,
                  zIndex,
                  opacity,
                  transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  cursor: 'pointer',
                  boxShadow: isActive 
                    ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                    : '0 10px 20px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden'
                }}
                onClick={() => {
                  if (isActive) {
                    window.open(card.url, '_blank', 'noopener,noreferrer');
                  } else {
                    setActiveCard(index);
                  }
                }}
              >
                <div style={{ width: '100%', height: '100%' }} />
              </Squircle>
            );
          })}
        </div>
      </div>
    </section>
  );
} 