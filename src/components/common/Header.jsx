import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from './Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import images from '../../config/images';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-surface/95 backdrop-blur-md shadow-sm' : 'bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav className="relative flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={images.logo}
              alt="Duke Street Studio"
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-hero-primary/10 ${
                  location.pathname === item.href
                    ? 'text-hero-primary bg-hero-primary/10'
                    : 'text-text-main hover:text-hero-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 lg:hidden p-2 -mr-2 text-text-main hover:text-hero-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-md lg:hidden"
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
                className="fixed inset-0 z-40 lg:hidden flex flex-col"
              >
                <Container className="flex-1 flex">
                  <nav className="flex flex-col justify-center w-full py-8">
                    <ul className="space-y-6">
                      {navigation.map((item, index) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 + index * 0.1,
                            duration: 0.3,
                            ease: [0.25, 0.1, 0, 1]
                          }}
                          className="text-center"
                        >
                          <Link
                            to={item.href}
                            className={`inline-block px-4 py-3 text-2xl font-medium transition-colors ${
                              location.pathname === item.href
                                ? 'text-hero-primary'
                                : 'text-text-main hover:text-hero-primary'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div 
                      className="mt-12 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="min-w-[200px]"
                      >
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                          Get Started
                        </Link>
                      </Button>
                    </motion.div>
                  </nav>
                </Container>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header; 