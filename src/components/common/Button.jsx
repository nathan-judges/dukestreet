import React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-button text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-button-primary text-button-text hover:bg-button-hover',
        secondary: 'bg-hero-secondary text-white hover:bg-hero-secondary/90',
        outline: 'border border-hero-primary text-hero-primary hover:bg-hero-primary/10',
        ghost: 'hover:bg-hero-primary/10 text-hero-primary',
        link: 'text-hero-primary underline-offset-4 hover:underline',
        custom: '', // Empty variant that doesn't add any default styles
      },
      size: {
        default: 'h-10 px-button py-button',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 