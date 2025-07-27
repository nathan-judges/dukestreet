"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/30 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-22">
          {/* Text Wrapper - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-start"
          >
            <p className="text-xl font-archivo font-medium leading-[30px] text-[#F7F6F3]">
              Sydney Based
            </p>
            <p className="text-xl font-archivo font-medium leading-[30px] text-white mix-blend-overlay">
              Working nation-wide
            </p>
          </motion.div>

          {/* Get in touch Button - Right Side */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex px-4 py-3 justify-center items-center gap-2.5 rounded-2xl bg-white text-dark text-xl font-archivo font-medium leading-[28px] hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark"
          >
            Get in touch
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
} 