import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <Link to="/" className="nav-logo-container" aria-label="Duke Street Home">
        <img
          src="/assets/images/logotype.svg"
          alt="Duke Street Logo"
          className="nav-logo"
          onError={(e) => {
            e.target.onerror = null;
            console.error('Failed to load logo');
          }}
        />
      </Link>

      <div className="nav-links" role="menubar" aria-label="Main menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? 'active' : ''}`
          }
          role="menuitem"
          aria-current={location.pathname === '/' ? 'page' : undefined}
        >
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? 'active' : ''}`
          }
          role="menuitem"
          aria-current={location.pathname === '/contact' ? 'page' : undefined}
        >
          <span className="nav-text">Contact</span>
        </NavLink>
      </div>

      <div className="nav-right">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-tree-container md:pointer-events-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-hidden="true"
          tabIndex="-1"
        >
          <img
            src="/assets/images/tree.svg"
            alt=""
            className="nav-tree"
            aria-hidden="true"
            onError={(e) => {
              e.target.onerror = null;
              console.error('Failed to load tree icon');
            }}
          />
        </button>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 640 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] p-5 bg-[#120B1E]/80 backdrop-blur-sm"
            onClick={handleClickOutside}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="w-full h-full bg-[#CBADFF] rounded-[32px] shadow-xl relative flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-[#120B1E]/60 hover:text-[#120B1E] transition-colors duration-200 rounded-full hover:bg-[#120B1E]/5"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="flex flex-col items-center justify-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => `relative group flex items-center ${isActive ? 'pointer-events-none' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.span
                        className={`text-[32px] block px-8 py-2 rounded-full transition-colors relative ${
                          isActive 
                            ? 'text-[#632CC9] font-medium' 
                            : 'text-[#120B1E] hover:text-[#AE88F1]'
                        }`}
                        whileTap={!isActive ? { scale: 0.95 } : {}}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-[#F9F8FC] rounded-full -z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        Home
                      </motion.span>
                    )}
                  </NavLink>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => `relative group flex items-center ${isActive ? 'pointer-events-none' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.span
                        className={`text-[32px] block px-8 py-2 rounded-full transition-colors relative ${
                          isActive 
                            ? 'text-[#632CC9] font-medium' 
                            : 'text-[#120B1E] hover:text-[#AE88F1]'
                        }`}
                        whileTap={!isActive ? { scale: 0.95 } : {}}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-[#F9F8FC] rounded-full -z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        Contact
                      </motion.span>
                    )}
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 