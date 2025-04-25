import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ 
  children, 
  className = '', 
  id,
  animate = true,
  bgColor = 'background',
  padding = 'default',
  ...props 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [animate]);

  const paddingClasses = {
    default: 'py-16 md:py-24',
    small: 'py-12 md:py-16',
    large: 'py-20 md:py-32',
    none: 'py-0',
  };

  const bgClasses = {
    background: 'bg-background',
    surface: 'bg-surface',
    hero: 'bg-hero-primary',
    about: 'bg-about-primary',
    services: 'bg-services-primary',
    projects: 'bg-projects-primary',
    contact: 'bg-contact-primary',
  };

  const classes = `${paddingClasses[padding]} ${bgClasses[bgColor]} ${className}`;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={classes}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  animate: PropTypes.bool,
  bgColor: PropTypes.oneOf(['background', 'surface', 'hero', 'about', 'services', 'projects', 'contact']),
  padding: PropTypes.oneOf(['default', 'small', 'large', 'none']),
};

export default Section; 