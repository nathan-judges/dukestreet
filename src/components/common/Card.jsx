import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  ...props 
}) => {
  const baseStyles = 'rounded-card overflow-hidden';
  
  const variants = {
    default: 'bg-surface border border-border',
    elevated: 'bg-surface shadow-card',
    primary: 'bg-hero-primary text-white',
    secondary: 'bg-hero-secondary text-white',
  };

  const hoverStyles = hover ? 'transition-transform duration-200 hover:-translate-y-1' : '';

  const classes = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-card ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`p-card ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-card border-t border-border ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'primary', 'secondary']),
  hover: PropTypes.bool,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card; 