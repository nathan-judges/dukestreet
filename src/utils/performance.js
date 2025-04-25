// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Lazy load images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  } else {
    // Fallback for browsers that don't support native lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Optimize scroll performance
export const optimizeScroll = () => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Perform scroll-related operations here
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Memory management
export const cleanupEventListeners = (element, events) => {
  events.forEach(event => {
    element.removeEventListener(event.type, event.listener);
  });
};

// Performance monitoring
export const measurePerformance = (callback, name = 'Operation') => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  } else {
    callback();
  }
};

// Resource preloading
export const preloadResources = (resources) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.type;
    link.href = resource.url;
    document.head.appendChild(link);
  });
}; 