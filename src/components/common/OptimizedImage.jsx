import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  ...props 
}) => {
  const filename = src.split('.').slice(0, -1).join('.');
  
  return (
    <picture>
      <source
        srcSet={`/images/${filename}.webp`}
        type="image/webp"
      />
      <source
        srcSet={`/images/${filename}.jpg`}
        type="image/jpeg"
      />
      <img
        src={`/images/${filename}.jpg`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default OptimizedImage; 