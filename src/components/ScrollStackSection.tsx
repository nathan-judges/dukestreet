import { useState } from 'react';
import { Squircle } from 'corner-smoothing';
import StarBorder from './StarBorder';

interface HelpRow {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function WhoWeHelp() {
  const [expandedRow, setExpandedRow] = useState<number>(1);

  const helpRows: HelpRow[] = [
    {
      id: 1,
      title: "Startups & Scale-ups",
      description: "We help ambitious startups and scale-ups build their digital presence from the ground up. From initial branding to full-stack development, we provide the foundation you need to grow and succeed in competitive markets.",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Established Businesses",
      description: "For established businesses looking to modernize their digital presence, we offer comprehensive redesign and development services. We help you stay relevant and competitive in an ever-evolving digital landscape.",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Creative Agencies",
      description: "We partner with creative agencies to provide technical expertise and development support. From custom web applications to interactive experiences, we help bring your creative vision to life with precision and reliability.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Content Creators",
      description: "For podcasters, influencers, and content creators, we build platforms that amplify your voice and connect with your audience. We create engaging digital experiences that help you grow your community and monetize your content.",
      icon: "🎙️"
    }
  ];

  const toggleRow = (id: number) => {
    // Always keep one accordion open - if clicking the same one, don't close it
    if (expandedRow !== id) {
      setExpandedRow(id);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleRow(id);
    }
  };

  return (
    <section 
      className="responsive-portfolio-padding responsive-portfolio-layout responsive-portfolio-height responsive-portfolio-radius"
      style={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        background: '#000510',
        minHeight: '80vh'
      }}
    >
      {/* Mobile/Tablet: Title and Subtext First */}
      <div className="lg:hidden w-full mb-4 md:mb-8">
        <h2
          className="responsive-portfolio-title"
          style={{
            color: '#F9F7F1',
            fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '-1.44px',
            margin: '0 0 24px 0'
          }}
        >
          Who we help
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

      {/* Left Column - Expandable Rows */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <div className="w-full">
                  <Squircle
          cornerRadius={64}
          cornerSmoothing={0.6}
          className="w-full responsive-accordion-container accordion-shell"
        >
          <StarBorder
            className="w-full responsive-accordion-border accordion-shell"
            color="rgba(249, 247, 241, 0.08)"
            speed="8s"
            thickness={1}
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}
            >
              <div className="accordion-inner">
                <div className="space-y-0">
                {helpRows.map((row) => (
                  <div key={row.id} className={`accordion-row ${expandedRow === row.id ? 'is-expanded' : ''}`}>
                    <button
                      id={`accordion-button-${row.id}`}
                      className="w-full text-left cursor-pointer transition-all duration-300 ease-out border-none bg-transparent accordion-header flex items-center justify-between"
                      onClick={() => toggleRow(row.id)}
                      onKeyDown={(e) => handleKeyDown(e, row.id)}
                      aria-expanded={expandedRow === row.id}
                      aria-controls={`accordion-content-${row.id}`}
                    >
                          <div className="flex items-center gap-4 md:gap-6">
                            <span className="text-2xl md:text-3xl lg:text-4xl">{row.icon}</span>
                            <h3 
                              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-archivo font-medium"
                              style={{
                                color: expandedRow === row.id ? '#F9F7F1' : '#F9F7F1'
                              }}
                            >
                              {row.title}
                            </h3>
                          </div>
                          <div 
                            className="text-2xl md:text-3xl transition-transform duration-300"
                            style={{
                              color: expandedRow === row.id ? '#F9F7F1' : '#F9F7F1',
                              transform: expandedRow === row.id ? 'rotate(45deg)' : 'rotate(0deg)'
                            }}
                          >
                            +
                          </div>
                    </button>

                    {/* Expandable Content */}
                    <div 
                      id={`accordion-content-${row.id}`}
                      role="region"
                      aria-labelledby={`accordion-button-${row.id}`}
                      className="overflow-hidden transition-all duration-300 ease-out"
                      style={{
                        maxHeight: expandedRow === row.id ? '200px' : '0px',
                        opacity: expandedRow === row.id ? 1 : 0,
                      }}
                    >
                      <div className="accordion-body">
                        <p 
                          className="text-base md:text-lg lg:text-xl font-archivo font-normal leading-relaxed"
                          style={{
                            color: '#F9F7F1',
                            opacity: 0.8,
                          }}
                        >
                          {row.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </StarBorder>
          </Squircle>
        </div>
      </div>

      {/* Desktop: Right Column - Text Content */}
      <div className="hidden lg:block" style={{ flex: '0 0 auto', marginLeft: '64px' }}>
        <h2
          className="responsive-portfolio-title"
          style={{
            color: '#F9F7F1',
            fontFamily: 'Archivo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '-1.44px',
            margin: '0 0 24px 0'
          }}
        >
          Who we help
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
    </section>
  );
} 