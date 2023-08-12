// @ts-nocheck
'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';
import { useFormField } from '../form';

const inputVariants = cva(
  'font-yekan  flex items-center w-full rounded-8 border border-light-gray-inactivestates active:border-light-secondary-100 focus-within:border-dark-gray-text ',
  {
    variants: {
      size: { sm: 'h-32 py-8 px-12 ', md: 'h-40 py-12 px-16', lg: 'p-16 h-48' },
      defaultVariants: {
        size: 'md',
      },
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, name, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { error, formItemId } = useFormField();

    const changeIcon = () => {
      switch (type) {
        case 'password':
          return showPassword ? (
            <button
              onClick={() => {
                setShowPassword(false);
              }}
            >
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M27.5 19.8C26.3 16.7 23.3 14.6 20 14.5C16.7 14.6 13.7 16.7 12.5 19.8V20.1C13.7 23.2 16.6 25.3 20 25.4C23.3 25.3 26.3 23.2 27.5 20.1V19.8ZM17 20C17 18.3 18.3 17 20 17C21.7 17 23 18.3 23 20C23 21.7 21.7 23 20 23C18.3 23 17 21.7 17 20ZM18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18C18.9 18 18 18.9 18 20ZM13.5 20C14.6 22.5 17.3 24.5 20 24.5C22.6 24.5 25.4 22.5 26.5 20C25.4 17.5 22.7 15.5 20 15.5C17.3 15.5 14.5 17.5 13.5 20Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                setShowPassword(true);
              }}
            >
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M27.5 19.8C26.3 16.7 23.3 14.6 20 14.5C16.7 14.6 13.7 16.7 12.5 19.8V20.1C13.7 23.2 16.6 25.3 20 25.4C23.3 25.3 26.3 23.2 27.5 20.1V19.8ZM17 20C17 18.3 18.3 17 20 17C21.7 17 23 18.3 23 20C23 21.7 21.7 23 20 23C18.3 23 17 21.7 17 20ZM18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18C18.9 18 18 18.9 18 20ZM13.5 20C14.6 22.5 17.3 24.5 20 24.5C22.6 24.5 25.4 22.5 26.5 20C25.4 17.5 22.7 15.5 20 15.5C17.3 15.5 14.5 17.5 13.5 20Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          );
      }
    };

    return (
      <div>
        <div
          className={cn(
            inputVariants({ size, className }),
            error &&
              'border-light-error-100 active:border-light-error-100 focus dark:border-dark-error-100',
          )}
        >
          <input
            id={formItemId}
            type={showPassword ? 'text' : type}
            className={cn(
              ' text-sm  transition-colors  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              className,
              error && 'text-light-error-100 dark:text-dark-error-100',
            )}
            ref={ref}
            {...props}
          />
          {changeIcon()}
        </div>
        {/* <span>{error ? errors[name] : 'this is not test'}</span> */}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
