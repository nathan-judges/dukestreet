"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl font-instrument-serif text-white font-normal">
              Duke St. Studio
            </h1>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <motion.a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark rounded px-2 py-1"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark rounded px-2 py-1"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark rounded px-2 py-1"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-dark px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-archivo font-semibold text-sm lg:text-base hover:bg-yellow/90 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:ring-offset-2 focus:ring-offset-dark"
            >
              Get in touch
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMobileMenu}
              className="text-white/80 hover:text-white transition-colors duration-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                <motion.a 
                  href="#home" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-base py-2 px-4 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a 
                  href="#services" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-base py-2 px-4 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-base py-2 px-4 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow text-dark px-6 py-3 rounded-xl font-archivo font-semibold text-base hover:bg-yellow/90 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:ring-offset-2 focus:ring-offset-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 