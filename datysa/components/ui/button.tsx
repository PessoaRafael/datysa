import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white',
  {
    variants: {
      variant: {
        primary: 'bg-[#2AC769] text-white hover:bg-[#1e9f5a]',
        secondary: 'bg-white text-[#0D3B66] border border-[#0D3B66] hover:bg-[#F4F7FA]',
        light: 'bg-white text-[#0D3B66] hover:bg-[#F4F7FA]',
        dark: 'bg-[#0D3B66] text-white hover:bg-[#1a3257]'
      },
      size: {
        sm: 'h-9 px-3 rounded-md',
        md: 'h-10 px-4 py-2 rounded-md',
        lg: 'h-11 px-8 py-4 rounded-md text-base'
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };