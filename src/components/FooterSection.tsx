import React from "react";
import '../styles/globals.css';
import '../styles/responsive.css';

const FooterSection: React.FC = () => {
  return (
    <footer
      className="footer-section bg-[#000510] px-[32px] pt-[80px] pb-[60px] md:px-[64px] md:pt-[160px] md:pb-[120px] md:pl-[148px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 items-start justify-items-start"
      style={{
        minHeight: '400px'
      }}
    >
      {/* Speak to us */}
      <div className="footer-col flex flex-col gap-6">
        <div className="footer-title">Speak to us</div>
        <a
          href="mailto:hello@dukest.studio"
          className="footer-subtext hover:text-blue-400 transition-colors duration-300"
          style={{ textDecoration: "none" }}
        >
          hello@dukest.studio
        </a>
        <div className="footer-stack flex flex-col gap-2 mt-12">
          <div className="footer-subtext">© 2025 Privacy</div>
          <div className="footer-subtext">Acknowledgement of Country</div>
        </div>
      </div>
      {/* Legal */}
      <div className="footer-col flex flex-col gap-6">
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
      <div className="footer-col flex flex-col gap-6">
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
    </footer>
  );
};

export default FooterSection; 