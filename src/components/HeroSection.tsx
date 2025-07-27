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
    <section className="relative h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Logo/Title */}
          <motion.h1
            variants={textVariants}
            className="text-6xl sm:text-8xl lg:text-9xl font-instrument-serif font-normal tracking-tight leading-none"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Duke St. Studio
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-archivo font-medium tracking-wide text-white/90"
          >
            audio. web. ux/ui.
          </motion.p>

          {/* Subtle description */}
          <motion.p
            variants={textVariants}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-archivo font-normal"
          >
            Empowering small businesses, NDIS providers, and creative entrepreneurs 
            with professional audio, web development, and UX/UI design services.
          </motion.p>

          {/* Get in touch button */}
          <motion.div
            variants={textVariants}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-dark px-10 py-4 rounded-2xl font-archivo font-semibold text-lg hover:bg-yellow/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow/20"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Down arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <svg 
              className="w-8 h-8 animate-bounce" 
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