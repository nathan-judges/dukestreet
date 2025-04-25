import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'Twitter',
        href: 'https://twitter.com/dukestreet',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/dukestreet',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/dukestreet',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-[18px] font-['Atkinson_Hyperlegible_Next'] mb-4">Duke Street Studio</h3>
            <p className="text-white/60">
              Helping small businesses and non-technical clients create impactful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[18px] font-['Atkinson_Hyperlegible_Next'] mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[18px] font-['Atkinson_Hyperlegible_Next'] mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="https://abr.business.gov.au/ABN/View?id=12685983279" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
              >
                ABN: 12 685 983 279
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-white/10 py-8 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-white/60">© {new Date().getFullYear()}</span>
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</Link>
            <Link to="/acknowledgement" className="text-white/60 hover:text-white transition-colors">Acknowledgement of Country</Link>
          </div>
          <div>
            <a 
              href="https://g.page/r/CV31f8PYUPXxEBM/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Leave us a Google Review
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 