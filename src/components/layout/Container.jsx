import React from 'react';
import { cva } from 'class-variance-authority';

const containerVariants = cva(
  'mx-auto w-full',
  {
    variants: {
      size: {
        default: 'max-w-7xl px-4 sm:px-6 lg:px-8',
        sm: 'max-w-5xl px-4 sm:px-6 lg:px-8',
        lg: 'max-w-7xl px-4 sm:px-6 lg:px-8',
        full: 'px-4 sm:px-6 lg:px-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const Container = React.forwardRef(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'div';
    return (
      <Comp
        className={containerVariants({ size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants }; 