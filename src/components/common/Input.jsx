import React from 'react';
import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-red-500 focus-visible:ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Input = React.forwardRef(({ className, variant, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={inputVariants({ variant, className })}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input, inputVariants }; 