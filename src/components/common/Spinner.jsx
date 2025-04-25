import React from 'react';
import { cva } from 'class-variance-authority';

const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        default: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
      color: {
        default: 'text-hero-primary',
        white: 'text-white',
        gray: 'text-text-subtle',
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'default',
    },
  }
);

const Spinner = React.forwardRef(({ className, size, color, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={spinnerVariants({ size, color, className })}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
});

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants }; 