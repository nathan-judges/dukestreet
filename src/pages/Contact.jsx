import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Textarea } from '../components/common/Textarea';
import { Select } from '../components/common/Select';
import AcknowledgementModal from '../components/AcknowledgementModal';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [isAcknowledgementOpen, setIsAcknowledgementOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Duke Street Studio. We're here to help bring your digital vision to life with our web development, podcast production, and design services."
      />
      <main id="main-content" className="w-full">
        {/* Contact Form */}
        <section 
          className="section bg-[#120B1E] py-20 sm:py-28 md:py-32 lg:py-40"
          aria-labelledby="contact-heading"
        >
          <div className="page-container px-4 sm:px-5">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-col items-start w-full p-6 sm:p-8 md:p-10 lg:p-12 rounded-[32px] sm:rounded-[48px] md:rounded-[56px] lg:rounded-[64px] bg-[#CBADFF] relative overflow-hidden"
            >
              {/* Background gradient animation */}
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 mb-8 md:mb-12">
                <motion.h1 
                  id="contact-heading"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[32px] sm:text-[40px] md:text-[48px] text-[#120B1E] font-['Atkinson_Hyperlegible_Next'] leading-tight md:leading-normal shrink-0"
                >
                  Get in Touch
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-[20px] sm:text-[24px] md:text-[32px] text-[#120B1E]/80 font-['Atkinson_Hyperlegible_Next'] font-light leading-normal"
                >
                  Tell us about your project and let's create something amazing together.
                </motion.p>
              </div>

              <form
                action="https://formspree.io/f/manonydo"
                method="POST"
                className="space-y-6 sm:space-y-8 w-full relative z-10"
                id="contact-form"
              >
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[#120B1E] font-medium text-base sm:text-lg">
                      Name <span className="text-[#120B1E]/60">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                      aria-label="Your name"
                      className="w-full bg-[#120B1E] border-[#120B1E]/20 text-white placeholder-white/60 rounded-2xl focus:border-[#CBADFF] focus:ring-[#CBADFF] p-3 sm:p-4 text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[#120B1E] font-medium text-base sm:text-lg">
                      Email <span className="text-[#120B1E]/60">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-label="Your email"
                      className="w-full bg-[#120B1E] border-[#120B1E]/20 text-white placeholder-white/60 rounded-2xl focus:border-[#CBADFF] focus:ring-[#CBADFF] p-3 sm:p-4 text-base sm:text-lg"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[#120B1E] font-medium text-base sm:text-lg">
                      Phone <span className="text-[#120B1E]/60">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="0400 000 000"
                      autoComplete="tel"
                      pattern="[0-9\s\-\+\(\)]*"
                      aria-required="true"
                      aria-label="Your phone number"
                      className="w-full bg-[#120B1E] border-[#120B1E]/20 text-white placeholder-white/60 rounded-2xl focus:border-[#CBADFF] focus:ring-[#CBADFF] p-3 sm:p-4 text-base sm:text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-[#120B1E] font-medium text-base sm:text-lg">
                      Service <span className="text-[#120B1E]/60">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      aria-required="true"
                      aria-label="Service of interest"
                      className="w-full bg-[#120B1E] border-[#120B1E]/20 text-white rounded-2xl focus:border-[#CBADFF] focus:ring-[#CBADFF] p-3 sm:p-4 text-base sm:text-lg"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-white/60">Select a service</option>
                      <option value="podcast" className="text-white">Podcast Production</option>
                      <option value="website" className="text-white">Website Design</option>
                      <option value="branding" className="text-white">Branding & Logo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[#120B1E] font-medium text-base sm:text-lg">
                    Message <span className="text-[#120B1E]/60">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    aria-required="true"
                    aria-label="Your message"
                    className="w-full bg-[#120B1E] border-[#120B1E]/20 text-white placeholder-white/60 rounded-2xl focus:border-[#CBADFF] focus:ring-[#CBADFF] p-3 sm:p-4 text-base sm:text-lg"
                  ></textarea>
                </div>

                {/* Anti-spam honeypot */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                {/* Stay on page and show success */}
                <input type="hidden" name="_redirect" value="https://dukestreet.studio/contact#form-success" />

                <div className="flex items-center justify-end pt-4">
                  <button 
                    type="submit"
                    aria-label="Send message"
                    className="relative overflow-hidden group bg-[#120B1E] text-white h-[56px] sm:h-[64px] px-8 sm:px-12 rounded-full border border-[#CBADFF] opacity-100 hover:opacity-70 active:opacity-50 transition-opacity duration-300 text-base sm:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      Send Message
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>

              {/* Success message */}
              <div 
                id="form-success" 
                className="hidden mt-6 rounded-2xl bg-[#120B1E] p-4 text-white/80"
                aria-live="polite"
              >
                Thank you for your message! We'll get back to you soon.
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section 
          className="contact-section section bg-[#120B1E] py-40"
          aria-labelledby="contact-info-heading"
        >
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h2 
                id="contact-info-heading"
                className="text-[40px] xs:text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] text-white font-['Atkinson_Hyperlegible_Next'] leading-[1.1] mb-4 sm:mb-6"
              >
                Let's make <motion.span className="inline-block text-transparent stroke-[#FFADBC] font-['Hi_Melody'] text-[1.25em] -mb-1 sm:-mb-2 tracking-widest" style={{ WebkitTextStroke: '1.5px #FFADBC' }} aria-hidden="true">❤</motion.span><br />
                <span className="stroke-text">something you love</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full mt-12 sm:mt-16 md:mt-20 pb-12 sm:pb-16 md:pb-20 border-b border-white/10">
                {/* Contact Info */}
                <div className="flex flex-col gap-2" role="contentinfo" aria-label="Contact information">
                  <h3 className="text-[20px] sm:text-[24px] text-white font-['Atkinson_Hyperlegible_Next'] mb-3 sm:mb-4">Speak to us</h3>
                  <a href="tel:0425226959" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors">
                    <span className="sr-only">Phone:</span> 0425 226 959
                  </a>
                  <a href="mailto:dukest.studio@gmail.com" className="text-base sm:text-lg text-white/60 hover:text-white transition-colors break-all">
                    <span className="sr-only">Email:</span> dukest.studio@gmail.com
                  </a>
                </div>

                {/* Sydney Office */}
                <div className="flex flex-col gap-2" role="contentinfo" aria-label="Office location">
                  <h3 className="text-[20px] sm:text-[24px] text-white font-['Atkinson_Hyperlegible_Next'] mb-3 sm:mb-4">Sydney</h3>
                  <a 
                    href="https://g.page/r/CV31f8PYUPXxEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base sm:text-lg text-white/60 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Address:</span>
                    <p>6 Duke St,</p>
                    <p>Kensington NSW 2033</p>
                  </a>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-2" role="contentinfo" aria-label="Legal information">
                  <h3 className="text-[20px] sm:text-[24px] text-white font-['Atkinson_Hyperlegible_Next'] mb-3 sm:mb-4">Legal</h3>
                  <a 
                    href="https://abr.business.gov.au/ABN/View?id=12685983279" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base sm:text-lg text-white/60 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Australian Business Number:</span>
                    ABN: 12 685 983 279
                  </a>
                </div>
              </div>

              <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-8 gap-4 sm:gap-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="text-sm sm:text-base text-white/60">© {new Date().getFullYear()}</span>
                  <Link to="/privacy" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">Privacy</Link>
                  <button
                    onClick={() => setIsAcknowledgementOpen(true)}
                    className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
                  >
                    Acknowledgement of Country
                  </button>
                </div>
                <div>
                  <a 
                    href="https://g.page/r/CV31f8PYUPXxEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
                  >
                    Leave us a Google Review
                  </a>
                </div>
              </footer>

              <AcknowledgementModal
                isOpen={isAcknowledgementOpen}
                onClose={() => setIsAcknowledgementOpen(false)}
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact; 