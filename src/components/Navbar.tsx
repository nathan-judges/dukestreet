"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToContact = () => {
    // Scroll to contact form section (placeholder for now)
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/30 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main navigation container - exact spacing and layout */}
        <div className="flex justify-between items-center self-stretch py-5 px-16">
          {/* Text wrapper - exact specifications */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-start"
          >
            {/* "Sydney Based" - exact typography */}
            <p className="text-[#F7F6F3] font-archivo text-xl font-normal font-medium leading-[30px]">
              Sydney Based
            </p>
            {/* "Working nation-wide" - exact typography with mix-blend-overlay */}
            <p className="text-white font-archivo text-xl font-normal font-medium leading-[30px] mix-blend-overlay">
              Working nation-wide
            </p>
          </motion.div>

          {/* Button - exact specifications */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex py-3 px-4 justify-center items-center gap-2.5 rounded-2xl bg-white hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark"
          >
            {/* Button text - exact typography */}
            <span className="text-dark font-archivo text-xl font-normal font-medium leading-[28px]">
              Get in touch
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
} 