import React from "react";
import '../styles/globals.css';
import '../styles/responsive.css';

const FooterSection: React.FC = () => {
  return (
    <footer
      className="footer-section flex flex-wrap justify-between items-start content-start self-stretch bg-[#000510] px-[32px] pt-[60px] pb-[40px] md:px-[64px] md:pt-[120px] md:pb-[80px] md:pl-[148px] gap-y-[42px] md:gap-y-[84px]"
    >
      {/* Speak to us */}
      <div className="footer-col flex flex-col gap-4 min-w-[220px] max-w-[340px]">
        <div className="footer-title">Speak to us</div>
        <a
          href="mailto:hello@dukest.studio"
          className="footer-subtext"
          style={{ textDecoration: "none" }}
        >
          hello@dukest.studio
        </a>
        <div className="footer-stack flex flex-col gap-0 mt-8">
          <div className="footer-subtext">© 2025 Privacy</div>
          <div className="footer-subtext">Acknowledgement of Country</div>
        </div>
      </div>
      {/* Legal */}
      <div className="footer-col flex flex-col gap-4 min-w-[220px] max-w-[340px]">
        <div className="footer-title">Legal</div>
        <a
          href="https://abr.business.gov.au/ABN/View?id=12685983279"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-subtext"
          style={{ textDecoration: "none" }}
        >
          ABN • 12 685 983 279
        </a>
      </div>
      {/* Feedback */}
      <div className="footer-col flex flex-col gap-4 min-w-[220px] max-w-[340px]">
        <div className="footer-title">Feedback</div>
        <a
          href="https://g.page/r/CV31f8PYUPXxEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-subtext"
          style={{ textDecoration: "none" }}
        >
          Leave a Google Review
        </a>
      </div>
    </footer>
  );
};

export default FooterSection; 