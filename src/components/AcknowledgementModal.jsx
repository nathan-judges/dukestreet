import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AcknowledgementModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Focus trap
    const handleTab = (e) => {
      if (!modalRef.current) return;
      
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTab);
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-[#120B1E]/80 backdrop-blur-sm"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full bg-[#1E0B0E] rounded-[64px] p-20 shadow-xl flex items-center"
            role="dialog"
            aria-modal="true"
            onClick={e => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-[#FCF8F8]/60 hover:text-[#FCF8F8] transition-colors duration-200 rounded-full hover:bg-[#FCF8F8]/5"
              aria-label="Close acknowledgement"
            >
              <X size={32} />
            </button>

            <style jsx global>{`
              ::selection {
                background: #FFFF00;
                color: #FF0000;
              }
            `}</style>

            <div className="text-[60px] leading-[1.2] text-[#FCF8F8] space-y-12">
              <p>
                Duke Street Studio stands on the land of the Gadigal people of the Eora Nation. We honour their ongoing connection to Country, culture, and community.
              </p>
              <p>
                Sovereignty was never ceded — always was, always will be Aboriginal land.
              </p>
              <p>
                Learn more about the importance of recognising Country at{' '}
                <a 
                  href="https://www.commonground.org.au/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFADBC] hover:text-[#E2788B] transition-colors"
                >
                  Common Ground
                </a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AcknowledgementModal; 