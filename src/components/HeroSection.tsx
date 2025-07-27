"use client";

import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  // Variable Proximity animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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

  const scrollToNextSection = () => {
    // Scroll to next section (Introduction/Value Proposition)
    const nextSection = document.getElementById('introduction-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Main Logo/Title - Fixed typography according to PRD */}
          <motion.h1
            variants={textVariants}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-instrument-serif font-normal tracking-tight leading-[0.9] sm:leading-[0.85] lg:leading-[0.8]"
          >
            <span className="text-white">
              Duke St. Studio
            </span>
          </motion.h1>

          {/* Tagline - Improved responsive typography */}
          <motion.p
            variants={textVariants}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-archivo font-medium tracking-wide text-white/90 leading-tight"
          >
            audio. web. ux/ui.
          </motion.p>

          {/* Subtle description - Enhanced readability */}
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/70 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-archivo font-normal px-4 sm:px-0"
          >
            Empowering small businesses, NDIS providers, and creative entrepreneurs 
            with professional audio, web development, and UX/UI design services.
          </motion.p>

          {/* Get in touch button - Enhanced styling */}
          <motion.div
            variants={textVariants}
            className="pt-6 sm:pt-8 lg:pt-10"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-dark px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-2xl font-archivo font-semibold text-base sm:text-lg lg:text-xl hover:bg-yellow/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow/20 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:ring-offset-2 focus:ring-offset-dark"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Down arrow - Improved positioning and styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/60 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-dark rounded-full p-2"
            aria-label="Scroll to next section"
          >
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 