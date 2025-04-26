import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import images from '../config/images';
import AcknowledgementModal from '../components/AcknowledgementModal';
import SEO from '../components/common/SEO';

const Home = () => {
  const [isAcknowledgementOpen, setIsAcknowledgementOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Home"
        description="Duke Street - Crafting digital experiences that inspire and innovate. We specialize in web development, design, and digital solutions."
      />
      <div className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="section h-[80dvh] w-full flex items-center overflow-x-hidden">
          <div className="page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="flex flex-col gap-12">
                {/* Main heading */}
                <div className="w-full">
                  <h1 className="w-full flex justify-center gap-[0.3em]">
                    <span className="text-[clamp(3rem,25dvw,20rem)] leading-none whitespace-nowrap">Vision.</span>
                    <span className="text-[clamp(3rem,25dvw,20rem)] leading-none whitespace-nowrap">Voice.</span>
                    <span className="text-[clamp(3rem,25dvw,20rem)] leading-none whitespace-nowrap">Design.</span>
                  </h1>
                </div>

                {/* Outlined text */}
                <div className="scroll-container relative">
                  <div className="flex whitespace-nowrap">
                    {[1, 2].map((_, index) => (
                      <p 
                        key={index}
                        className="text-[clamp(3rem,10vw,12rem)] leading-none font-light stroke-text scroll-text"
                      >
                        Sydney-based podcast production & digital design for small businesses.&nbsp;
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full 
                      bg-[#C3FFAD] text-[#141E0B] hover:bg-[#B4F29E] transition-all duration-300"
                  >
                    Let's chat
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who we help Section */}
        <section className="section mt-12 xs:mt-20 md:mt-32 lg:mt-40">
          <div className="page-container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="pl-3 xs:pl-4 md:pl-10">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] text-[#C3FFAD] font-['Atkinson_Hyperlegible_Next'] leading-normal mb-4 xs:mb-5">Who we help</h2>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-start w-full p-4 xs:p-6 md:p-8 lg:p-10 rounded-[24px] xs:rounded-[32px] md:rounded-[48px] lg:rounded-[64px] bg-[#C3FFAD]"
            >
              <div className="flex flex-col w-full">
                {[
                  {
                    title: "Small Businesses",
                    description: "Local businesses looking to establish their online presence."
                  },
                  {
                    title: "NDIS Providers",
                    description: "Service providers seeking to improve their digital communication."
                  },
                  {
                    title: "Creative Entrepreneurs",
                    description: "Artists and creators wanting to showcase their work online."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 lg:gap-[84px] py-6 md:py-8 lg:py-10 
                      ${index !== 2 ? 'border-b border-[#A0EB84]' : ''} group hover:cursor-pointer`}
                  >
                    <h3 className="text-4xl md:text-6xl lg:text-[80px] text-[#1E1B0B] font-['Atkinson_Hyperlegible_Next'] leading-tight md:leading-normal 
                      group-hover:text-[#141E0B] group-hover:opacity-60 transition-colors md:min-w-[400px] lg:min-w-[800px] md:whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="text-xl md:text-2xl lg:text-[28px] text-[#1E1B0B] font-['Atkinson_Hyperlegible_Next'] leading-normal 
                      group-hover:text-[#141E0B] group-hover:opacity-60 transition-colors">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="my-12 xs:my-20 md:my-32 lg:my-40 text-2xl xs:text-3xl md:text-5xl lg:text-[64px] text-[#FCF8F8] font-['Atkinson_Hyperlegible_Next'] leading-[1.2] md:leading-[1.1]">
              We <span className="text-[#C3FFAD] relative inline-block">
                empower
                <motion.svg
                  className="absolute -bottom-1 md:-bottom-2 -left-1 w-[calc(100%+8px)]"
                  width="100%"
                  height="16"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.path
                    d="M 0 12 C 50 12, 100 4, 200 8"
                    stroke="#C3FFAD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span> small businesses, NDIS providers, & creative entrepreneurs to grow their brand presence and tell their story authentically.
            </div>
          </div>
        </section>

        {/* What we do Section */}
        <section className="section bg-[#FCFBF7] py-12 xs:py-20 md:py-32 lg:py-40 px-3 xs:px-4 md:px-6 lg:px-[60px]">
          <div className="page-container">
            <div className="flex flex-col md:flex-row md:items-start gap-4 xs:gap-6 md:gap-8 lg:gap-[84px]">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-[48px] text-[#DE687E] font-['Atkinson_Hyperlegible_Next'] leading-normal shrink-0"
              >
                What we do
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-3xl lg:text-[48px] text-[#1E0B0E] font-['Atkinson_Hyperlegible_Next'] font-light leading-normal"
              >
                Whether it's creating podcasts that connect or building websites that convert, we specialise in crafting simple yet beautiful digital experiences. From custom branding to seamless UX/UI design, we help businesses grow with a focus on the future.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 md:gap-5 mt-12 xs:mt-16 md:mt-20 lg:mt-24">
              {[
                {
                  title: "Podcast Production",
                  image: "podcast-production.jpg",
                  link: "/services"
                },
                {
                  title: "Web Design",
                  image: "web-design.jpg",
                  link: "/services"
                },
                {
                  title: "Branding",
                  image: "branding.jpg",
                  link: "/services"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                  }}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col justify-end items-center aspect-[4/5] flex-1 rounded-[20px] md:rounded-[28px] lg:rounded-[32px] cursor-pointer relative overflow-hidden group"
                >
                  <div 
                    className="absolute inset-0 w-full h-full transform transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/src/assets/images/${service.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center self-stretch p-4 md:p-5 lg:p-8 relative z-10"
                  >
                    <h3 className="text-white font-['Atkinson_Hyperlegible_Next'] text-xl md:text-2xl lg:text-[28px] leading-normal">
                      {service.title}
                    </h3>
                    <Link 
                      to={service.link} 
                      className="text-white font-['Atkinson_Hyperlegible_Next'] text-base md:text-lg leading-normal 
                        flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      Learn more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section bg-[#120B1E] py-12 xs:py-20 md:py-32 lg:py-40">
          <div className="page-container px-3 xs:px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
              className="flex flex-col items-start w-full p-4 xs:p-6 md:p-8 lg:p-10 rounded-[24px] xs:rounded-[32px] md:rounded-[48px] lg:rounded-[64px] bg-[#CBADFF] relative overflow-hidden"
            >
              {/* Background gradient animation */}
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              <div className="flex flex-col md:flex-row md:items-start gap-4 xs:gap-6 md:gap-8">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-fluid-3xl lg:text-fluid-4xl text-[#120B1E] font-['Atkinson_Hyperlegible_Next'] leading-tight shrink-0"
                >
                  Why Choose Us
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-fluid-xl lg:text-fluid-2xl text-[#120B1E]/80 font-['Atkinson_Hyperlegible_Next'] font-light leading-normal"
                >
                  Your business is unique, and so is our approach. We deliver tailored, human-centred design that is as functional as it is beautiful. We focus on long-term solutions, ensuring your brand evolves with you.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 md:gap-8 mt-8 xs:mt-12 md:mt-16 w-full">
                {[
                  {
                    title: "Bonafide Podcast",
                    description: "A complete podcast production and branding solution for Luke Bona's show.",
                    link: "/projects"
                  },
                  {
                    title: "ByStorm Beauty",
                    description: "Website design and branding for a growing beauty business.",
                    link: "/projects"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ 
                      opacity: 0,
                      y: 10,
                      filter: "blur(5px)"
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.2
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="flex flex-col p-fluid-lg rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] bg-[#120B1E] group transition-all duration-500"
                  >
                    <h3 className="text-fluid-2xl text-white font-['Atkinson_Hyperlegible_Next'] leading-tight mb-fluid-sm">{project.title}</h3>
                    <p className="text-fluid-lg text-white/60 font-['Atkinson_Hyperlegible_Next'] leading-normal mb-fluid-md">
                      {project.description}
                    </p>
                    <Link 
                      to={project.link}
                      className="inline-flex items-center text-[#CBADFF] transition-colors text-fluid-base font-['Atkinson_Hyperlegible_Next']"
                    >
                      View case study 
                      <motion.span 
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[#120B1E] py-12 xs:py-20 md:py-32 lg:py-40">
          <div className="page-container px-3 xs:px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-[64px] text-white font-['Atkinson_Hyperlegible_Next'] leading-[0.9] mb-6 xs:mb-8 md:mb-10">
                Let's make <motion.span className="inline-block text-transparent stroke-[#FFADBC] font-['Hi_Melody'] text-[1.25em] -mb-2 tracking-widest" style={{ WebkitTextStroke: '2px #FFADBC' }}>❤</motion.span><br />
                <span className="stroke-text">something you love</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 w-full mt-8 xs:mt-12 md:mt-16 pb-8 xs:pb-12 md:pb-16 border-b border-white/10">
                {/* Contact Info */}
                <div className="flex flex-col gap-fluid-xs">
                  <h3 className="text-fluid-lg text-white font-['Atkinson_Hyperlegible_Next'] mb-fluid-sm">Speak to us</h3>
                  <a href="tel:0425226959" className="text-fluid-base text-white/60 hover:text-white transition-colors">0425 226 959</a>
                  <a href="mailto:dukest.studio@gmail.com" className="text-fluid-base text-white/60 hover:text-white transition-colors">dukest.studio@gmail.com</a>
                </div>

                {/* Sydney Office */}
                <div className="flex flex-col gap-fluid-xs">
                  <h3 className="text-fluid-lg text-white font-['Atkinson_Hyperlegible_Next'] mb-fluid-sm">Sydney</h3>
                  <a 
                    href="https://g.page/r/CV31f8PYUPXxEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-fluid-base text-white/60 hover:text-white transition-colors"
                  >
                    <p>6 Duke St,</p>
                    <p>Kensington NSW 2033</p>
                  </a>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-fluid-xs">
                  <h3 className="text-fluid-lg text-white font-['Atkinson_Hyperlegible_Next'] mb-fluid-sm">Legal</h3>
                  <a 
                    href="https://abr.business.gov.au/ABN/View?id=12685983279" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-fluid-base text-white/60 hover:text-white transition-colors"
                  >
                    ABN: 12 685 983 279
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-6 xs:mt-8 md:mt-10 gap-4 xs:gap-6 md:gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-fluid-sm sm:gap-fluid-md">
                  <span className="text-fluid-sm text-white/60">© {new Date().getFullYear()}</span>
                  <Link to="/privacy" className="text-fluid-sm text-white/60 hover:text-white transition-colors">Privacy</Link>
                  <button
                    onClick={() => setIsAcknowledgementOpen(true)}
                    className="text-fluid-sm text-white/60 hover:text-white transition-colors"
                  >
                    Acknowledgement of Country
                  </button>
                </div>
                <div>
                  <a 
                    href="https://g.page/r/CV31f8PYUPXxEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-fluid-sm text-white/60 hover:text-white transition-colors"
                  >
                    Leave us a Google Review
                  </a>
                </div>

                <AcknowledgementModal
                  isOpen={isAcknowledgementOpen}
                  onClose={() => setIsAcknowledgementOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 