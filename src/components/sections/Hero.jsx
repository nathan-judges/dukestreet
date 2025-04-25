import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../common/Button';

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <Container>
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight"
            variants={fadeInUp}
          >
            We help small businesses create impactful podcasts, websites & brands that resonate with their audience.
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-text-light leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Based in Sydney. Creating content & websites that connect.
          </motion.p>

          <motion.p 
            className="text-lg sm:text-xl text-text-light leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We specialise in podcast production, website design, branding & UX/UI for small businesses & solo founders who want things done right — without the agency fluff.
          </motion.p>

          <motion.div 
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button
              onClick={scrollToContact}
              variant="primary"
              size="lg"
            >
              Let's chat
            </Button>
            <Button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
              size="lg"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero; 