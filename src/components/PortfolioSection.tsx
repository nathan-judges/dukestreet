import { useState, useEffect } from 'react';
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
      title: "Customizable",
      icon: "⚙️",
      color: "#4F46E5"
    },
    {
      id: 2,
      title: "Reliable",
      icon: "</>",
      color: "#10B981"
    },
    {
      id: 3,
      title: "Smooth",
      icon: "1",
      color: "#F59E0B"
    }
  ];

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
          className="responsive-portfolio-title"
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
          className="responsive-portfolio-text"
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
            
            let transform = '';
            let zIndex = 1;
            let opacity = 0.3;
            
            if (isActive) {
              transform = 'translate(0, 0) scale(1) rotate(0deg)';
              zIndex = 3;
              opacity = 1;
            } else if (isNext) {
              transform = `translate(-${settings.cardDistance}px, -${settings.verticalDistance}px) scale(0.9) rotate(${settings.skewAmount}deg)`;
              zIndex = 2;
              opacity = 0.7;
            } else if (isPrev) {
              transform = `translate(${settings.cardDistance}px, ${settings.verticalDistance}px) scale(0.9) rotate(-${settings.skewAmount}deg)`;
              zIndex = 1;
              opacity = 0.5;
            }

            return (
              <Squircle
                key={card.id}
                cornerRadius={24}
                cornerSmoothing={0.6}
                className="responsive-card"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  background: card.color,
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
                    : '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => setActiveCard(index)}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: isActive ? '48px' : '32px',
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                      marginBottom: '8px',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {card.icon}
                  </div>
                  <div
                    style={{
                      fontSize: isActive ? '20px' : '16px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {card.title}
                  </div>
                </div>
              </Squircle>
            );
          })}
        </div>
      </div>
    </section>
  );
} 