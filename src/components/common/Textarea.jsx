import React from 'react';
import { cva } from 'class-variance-authority';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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

const Textarea = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <textarea
      className={textareaVariants({ variant, className })}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants }; 