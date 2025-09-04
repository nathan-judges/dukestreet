import React, { useEffect, useState } from 'react';
import '../styles/globals.css';

interface AcknowledgmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AcknowledgmentModal: React.FC<AcknowledgmentModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const titleId = 'acknowledgment-modal-title';

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle escape key, prevent body scroll, and manage focus
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      
      // Store the currently focused element
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      
      // Small delay to ensure DOM is ready for animation and focus
      setTimeout(() => {
        setIsAnimating(true);
        // Focus the modal for screen readers
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 10);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      // Simple focus trap
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTabKey);
        
        // Return focus to the previously focused element
        if (previouslyFocusedElement) {
          previouslyFocusedElement.focus();
        }
      };
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 200);
  };

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-out"
      style={{
        backdropFilter: `blur(${isAnimating ? '8px' : '0px'})`,
        WebkitBackdropFilter: `blur(${isAnimating ? '8px' : '0px'})`,
        background: `rgba(0, 0, 0, ${isAnimating ? '0.4' : '0'})`,
      }}
      onClick={handleClose}
    >
      {/* Modal Content */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full h-full md:mx-4 md:max-w-[900px] md:w-full md:max-h-[90dvh] md:h-auto overflow-y-auto transition-all duration-300 ease-out"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: isMobile ? '0px' : 'clamp(32px, 8vw, 80px)',
          padding: isMobile ? 'clamp(32px, 8vw, 64px)' : 'clamp(32px, 8vw, 84px)',
          paddingTop: isMobile ? 'clamp(80px, 12vw, 120px)' : 'clamp(32px, 8vw, 84px)',
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 active:bg-white/50 hover:scale-110 active:scale-95 transition-all duration-200 ease-out group"
          style={{
            top: isMobile ? '24px' : '32px',
            right: isMobile ? '24px' : '32px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#000510] transition-transform duration-200 ease-out group-hover:rotate-90"
          >
            <path d="m6 6 12 12" />
            <path d="m18 6-12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <h2
            id={titleId}
            className="font-['Archivo:Medium',_sans-serif] text-[#f84f07] tracking-[-1.44px] leading-normal"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)'
            }}
          >
            Acknowledgement of Country
          </h2>

          {/* Body Text */}
          <p
            className="font-['Archivo:Regular',_sans-serif] text-[#000510] leading-[32px]"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)'
            }}
          >
            Duke Street Studio is located on the unceded land of the Gadigal people of the Eora Nation. We acknowledge the Traditional Custodians of this Country and their ongoing cultural, spiritual, and social connections to their lands, waters, and communities. We extend our respect to Elders past and present, and we recognise the vital role of Aboriginal and Torres Strait Islander people in the life of our nation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgmentModal;
