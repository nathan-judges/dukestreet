"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <h1 className="text-xl font-instrument-serif text-white font-normal">
              Duke St. Studio
            </h1>
          </motion.div>

          {/* Navigation Links - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors duration-200 font-archivo font-medium text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-dark px-4 py-2 rounded-xl font-archivo font-semibold text-sm hover:bg-yellow/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in touch
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              className="text-white/80 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 