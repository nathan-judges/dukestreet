import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  onLoad = () => {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, setRef] = useState(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  useEffect(() => {
    if (!priority && !isInView) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      onLoad();
    };
  }, [src, isInView, priority, onLoad]);

  return (
    <motion.div
      ref={setRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </motion.div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  priority: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default LazyImage; 