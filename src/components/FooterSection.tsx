import React from "react";
import '../styles/globals.css';
import '../styles/responsive.css';

interface FooterSectionProps {
  onOpenModal: () => void;
  onOpenPolicies: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ onOpenModal, onOpenPolicies }) => {
  return (
    <footer
      className="footer-section bg-[#000510] px-[32px] pt-[80px] pb-[60px] md:px-[64px] md:pt-[160px] md:pb-[120px] md:pl-[148px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start justify-items-start"
      style={{
        minHeight: '400px'
      }}
    >
      {/* Speak to us */}
      <div className="footer-col flex flex-col gap-4">
        <div className="footer-title">Speak to us</div>
        <a
          href="mailto:hello@dukest.studio"
          className="footer-subtext hover:text-blue-400 transition-colors duration-300"
          style={{ textDecoration: "none" }}
        >
          hello@dukest.studio
        </a>
      </div>
      
      {/* Legal */}
      <div className="footer-col flex flex-col gap-4">
        <div className="footer-title">Legal</div>
        <a
          href="https://abr.business.gov.au/ABN/View?id=12685983279"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-subtext hover:text-pink-400 transition-colors duration-300"
          style={{ textDecoration: "none" }}
        >
          ABN • 12 685 983 279
        </a>
      </div>
      
      {/* Feedback */}
      <div className="footer-col flex flex-col gap-4">
        <div className="footer-title">Feedback</div>
        <a
          href="https://g.page/r/CV31f8PYUPXxEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-subtext hover:text-red-400 transition-colors duration-300"
          style={{ textDecoration: "none" }}
        >
          Leave a Google Review
        </a>
      </div>
      
      {/* Policy and Acknowledgement */}
      <div className="footer-col flex flex-col gap-4">
        <div className="footer-stack flex flex-col gap-2">
          <button
            onClick={onOpenPolicies}
            className="footer-subtext hover:text-orange-400 transition-colors duration-300 text-left"
            style={{ 
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            © 2025 Policies
          </button>
          <button
            onClick={onOpenModal}
            className="footer-subtext hover:text-orange-400 transition-colors duration-300 text-left"
            style={{ 
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Acknowledgement of Country
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 