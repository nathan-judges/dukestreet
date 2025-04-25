import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ 
  level = 2, 
  children, 
  className = '', 
  variant = 'default',
  align = 'left',
  ...props 
}) => {
  const baseStyles = 'font-bold text-hero-primary';
  
  const variants = {
    default: '',
    display: 'text-h1 font-h1',
    section: 'text-h2 font-h2',
    subsection: 'text-h3 font-h3',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const classes = `${baseStyles} ${variants[variant]} ${alignments[align]} ${className}`;

  const Tag = `h${level}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'display', 'section', 'subsection']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Heading; 