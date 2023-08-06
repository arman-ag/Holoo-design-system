import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-light-gray-text	dark:text-dark-gray-text rounded-16 transition-colors  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        fill: 'bg-light-secondary-100   hover:bg-light-secondary-120 active:bg-light-secondary-120 focus:bg-light-secondary-130 dark:bg-dark-secondary-70 dark:hover:bg-dark-secondary-60  dark:active:bg-dark-secondary-60 dark:focus:bg-dark-secondary-50',
        outline:
          'border-2 border-light-secondary-100 text-light-secondary-100 hover:text-light-secondary-120 hover:bg-light-secondary-10 active:bg-light-secondary-10 active:text-light-secondary-120 focus:text-light-secondary-130 focus:bg-light-secondary-20',

        // destructive: 'bg-destructive  shadow-sm hover:bg-destructive/90',
        text: ' text-light-secondary-100  hover:text-light-secondary-120 active:text-light-secondary-120 focus:text-light-secondary-130',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'text-secondary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-28 w-104 py-12 px-2 text-sm font-normal',
        md: 'h-40 w-160  px-16 py-8 font-medium text-base	',
        lg: ' w-225 h-44 py-8  px-24 font-bold text-base',
        xl: 'w-335 h-48 py-8  px-24 font-bold text-lg	',
      },
    },
    defaultVariants: {
      variant: 'fill',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      loading = false,
      children,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <svg
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.5424 21C6.54843 21 2.5 16.9706 2.5 12C2.5 7.02944 6.54843 3 11.5424 3C14.0719 3 16.3589 4.03377 18 5.7'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
            />
            <path
              d='M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z'
              fill='currentColor'
            />
            <path
              d='M7.5 6.98126L11.5 11.9578'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
            />
            <path
              d='M13.7511 17.7461L13.9504 17.5483C14.2815 17.2197 14.4677 16.7726 14.4677 16.3062V14.3265C14.4677 12.9036 15.6212 11.75 17.0442 11.75C18.4672 11.75 19.6208 12.9036 19.6208 14.3265V16.3062C19.6208 16.7726 19.8069 17.2197 20.138 17.5483L20.3374 17.7461C20.4958 17.9034 20.3845 18.1736 20.1613 18.1736H13.9272C13.704 18.1736 13.5927 17.9034 13.7511 17.7461L13.2227 17.2138L13.7511 17.7461Z'
              stroke='currentColor'
              stroke-width='1.5'
            />
            <path
              d='M18.7074 20.6215C18.3498 20.9626 17.7384 21.1874 17.0441 21.1874C16.3499 21.1874 15.7384 20.9626 15.3809 20.6215'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
            />
          </svg>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
