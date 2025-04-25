import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animation configurations
const animationConfigs = {
  fadeIn: {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  },
  slideUp: {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
  },
  scaleIn: {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
  },
};

// Create a reusable animation context
export const createAnimationContext = (element) => {
  return gsap.context(() => {}, element);
};

// Scroll-triggered animations
export const scrollReveal = (element, config = {}) => {
  const defaults = {
    trigger: element,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  };

  return gsap.from(element, {
    ...animationConfigs[config.type || 'fadeIn'],
    scrollTrigger: { ...defaults, ...config.scrollTrigger },
  });
};

// Stagger animations
export const staggerReveal = (elements, config = {}) => {
  return gsap.from(elements, {
    ...animationConfigs[config.type || 'fadeIn'],
    stagger: config.stagger || 0.2,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
      ...config.scrollTrigger,
    },
  });
};

// Parallax effect
export const parallax = (element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Optimized animation cleanup
export const cleanupAnimations = (context) => {
  if (context) {
    context.revert();
  }
};

// Performance optimized animation
export const optimizedAnimation = (element, config) => {
  const animation = gsap.to(element, {
    ...config,
    willChange: 'transform, opacity',
  });

  // Cleanup will-change after animation
  animation.eventCallback('onComplete', () => {
    element.style.willChange = 'auto';
  });

  return animation;
}; 