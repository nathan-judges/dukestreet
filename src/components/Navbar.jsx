import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Tree from '../assets/images/tree.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [imageError, setImageError] = useState({ logo: false, tree: false });
  const location = useLocation();

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-[#120B1E] relative z-50">
      <div className="navbar">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="block">
            {!imageError.logo ? (
              <img 
                src="/assets/images/logotype.svg" 
                alt="Duke Street Logo" 
                className="nav-logo" 
                onError={() => setImageError(prev => ({ ...prev, logo: true }))}
              />
            ) : (
              <span className="text-[#F9F8FC] text-sm font-medium">Duke Street</span>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="nav-links">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${activeLink === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            {/* Animated background for active link */}
            <motion.div
              className="nav-background"
              layoutId="navbar-active"
              animate={{
                width: '86px',
                x: activeLink === '/' ? '0px' : '86px'
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        {/* Tree Logo (Desktop and Mobile) */}
        <div className="flex items-center">
          {!imageError.tree && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.img 
                src={Tree}
                alt="" 
                className="nav-tree" 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                onError={() => setImageError(prev => ({ ...prev, tree: true }))}
              />
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="mobile-menu-links"
              >
                {links.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`mobile-menu-link ${activeLink === path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 