import React, { useEffect } from 'react';
import '../styles/globals.css';

interface AcknowledgmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AcknowledgmentModal: React.FC<AcknowledgmentModalProps> = ({ isOpen, onClose }) => {
  // Handle escape key and prevent body scroll
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'rgba(0, 0, 0, 0.4)'
      }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative mx-4 max-w-[900px] w-full max-h-[90dvh] overflow-y-auto"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 'clamp(32px, 8vw, 80px)',
          padding: 'clamp(32px, 8vw, 84px)',
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
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
            className="text-[#000510]"
          >
            <path d="m6 6 12 12" />
            <path d="m18 6-12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col gap-8">
          {/* Title */}
          <h2
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
