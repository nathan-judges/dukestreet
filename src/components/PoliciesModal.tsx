import React, { useEffect, useState } from 'react';
import '../styles/globals.css';

interface PoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PoliciesModal: React.FC<PoliciesModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const titleId = 'policies-modal-title';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      const previouslyFocusedElement = document.activeElement as HTMLElement;

      setTimeout(() => {
        setIsAnimating(true);
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 10);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

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

      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);

      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleTabKey);
        if (previouslyFocusedElement) {
          previouslyFocusedElement.focus();
        }
      };
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 200);
  };

  if (!shouldRender) return null;

  const sectionTitleClass = "font-['Archivo:Medium',_sans-serif] text-[#000510] tracking-[-0.8px] leading-tight";
  const bodyTextClass = "font-['Archivo:Regular',_sans-serif] text-[#000510] leading-[30px]";

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
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full h-full md:mx-4 md:max-w-[1000px] md:w-full md:max-h-[90dvh] md:h-auto overflow-y-auto transition-all duration-300 ease-out"
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

        <div className="flex flex-col gap-8">
          <h2
            id={titleId}
            className="font-['Archivo:Medium',_sans-serif] text-[#f84f07] tracking-[-1.44px] leading-normal"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
          >
            Website Policies
          </h2>

          <p className={bodyTextClass} style={{ fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
            Welcome to Duke Street Studio. To ensure a clear and transparent relationship with our clients and website visitors, we have established the following policies.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>1. Privacy Policy</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                This policy explains how we collect, use, and protect the personal information of our clients and website visitors.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Information We Collect:</h4>
              <ul className="list-disc pl-6">
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Contact information (name, email, phone number) provided by clients or through contact forms.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Client business information and project details.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Website usage data, such as IP address, browser type, and pages visited, collected via analytics tools.</li>
              </ul>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>How We Use Your Information:</h4>
              <ul className="list-disc pl-6">
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>To provide and manage our services.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>To communicate with you about your projects or our services.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>For internal record-keeping and business analysis.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>To improve our website and services.</li>
              </ul>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Data Security:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>
                We are committed to protecting your data and employ security measures to prevent unauthorized access or disclosure.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Third-Party Services:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>
                We may use third-party services (e.g., hosting, analytics) that have their own privacy policies.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>2. Terms of Service</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                These terms govern your use of our services and our relationship with you as a client.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Service Agreement:</h4>
              <ul className="list-disc pl-6">
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Details the scope of work for each service (e.g., website development, podcast production, social media management).</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Defines project timelines and deliverables.</li>
              </ul>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Payment Terms:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Specifies payment schedules, methods, and any late fees.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Client Responsibilities:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Outlines what we expect from you, such as providing content, timely feedback, and project assets.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Intellectual Property (IP):</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Clarifies that the client retains ownership of their content and trademarks. States that Duke Street Studio retains ownership of the underlying code, tools, or reusable components unless otherwise agreed upon.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Limitation of Liability:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Sets out the limits of our liability for any issues arising from our services.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Dispute Resolution:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Explains the process for resolving any disputes.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Termination of Services:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Describes the conditions under which the service agreement can be terminated by either party.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>3. Disclaimer</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                The information on this website is for general informational purposes only and is subject to change without notice.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>No Legal or Financial Advice:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>The content on this site does not constitute professional advice.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Accuracy:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>While we strive to provide accurate information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>4. Accessibility Statement</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                Duke Street Studio is committed to making our website and the digital products we create accessible to everyone.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Our Commitment:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>We aim to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Feedback:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>We welcome your feedback on the accessibility of our website. Please contact us if you encounter any barriers.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>5. Cookie Policy</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                This policy explains how we use cookies and similar technologies on our website.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>What are Cookies?</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Brief explanation of cookies as small text files stored on your device.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>How We Use Cookies:</h4>
              <ul className="list-disc pl-6">
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>To improve website functionality and user experience.</li>
                <li className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>For analytics to understand how visitors use our site.</li>
              </ul>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Your Choices:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Explains how users can manage or disable cookies through their browser settings.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={sectionTitleClass} style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>6. Social Media Policy (for Client Services)</h3>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                This policy outlines our approach to managing social media accounts on behalf of our clients.
              </p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Content Creation:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>We will produce content based on an agreed-upon strategy and brand guidelines.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Community Management:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Defines our role in monitoring and responding to comments and messages.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Account Access and Security:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>Describes how we handle account credentials and maintain security.</p>
              <h4 className={sectionTitleClass} style={{ fontSize: 'clamp(18px, 2.5vw, 20px)' }}>Compliance:</h4>
              <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>We will ensure all social media activities comply with the terms of service of each platform.</p>
            </div>

            <p className={bodyTextClass} style={{ fontSize: 'clamp(16px, 2.2vw, 18px)' }}>
              This outline provides a solid framework. You should consult with a legal professional to draft the final, legally binding versions of your policies to ensure they fully comply with relevant Australian laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesModal;


