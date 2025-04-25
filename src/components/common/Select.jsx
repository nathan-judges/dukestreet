import React from 'react';
import { cva } from 'class-variance-authority';

const selectVariants = cva(
  'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-red-500 focus:ring-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Select = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  return (
    <select
      className={selectVariants({ variant, className })}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export { Select, selectVariants }; 