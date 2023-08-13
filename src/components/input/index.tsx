// @ts-nocheck
'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';
import { FormControl, FormLabel, FormMessage, useFormField } from '../form';

const inputVariants = cva(
  ' flex items-center w-full rounded-8 border border-light-gray-inactivestates focus-within:border-light-secondary-100 active:border-dark-gray-text my-8 ',
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
  ({ label, disabled, className, size, dir, type, name, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { error, formItemId } = useFormField();

    const changeAction = () => {
      if (type === 'password') {
        return showPassword ? (
          <span
            className='cursor-pointer text-dark-gray-text dark:text-light-secondary-100'
            onClick={() => {
              setShowPassword(false);
            }}
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.1822 11.5014C10.2092 12.1741 9.23264 12.456 8.00035 12.456C4.55169 12.456 1.74189 8.35761 1.74189 8.35761C1.60166 8.15125 1.60166 7.8516 1.74189 7.64523C1.74189 7.64523 4.55169 3.54688 8.00035 3.54688C11.449 3.54688 14.2588 7.64523 14.2588 7.64523C14.399 7.8516 14.399 8.15125 14.2588 8.35761C14.2588 8.35761 13.9093 8.87416 13.304 9.53964C13.2268 9.62457 13.1452 9.71195 13.0597 9.80113'
                stroke='currentColor'
                stroke-linecap='round'
              />
              <path
                d='M1 1L15 15'
                stroke='currentColor'
                stroke-linecap='round'
              />
              <circle
                cx='7.99858'
                cy='7.99858'
                r='2.04545'
                stroke='currentColor'
              />
            </svg>
          </span>
        ) : (
          <span
            className='cursor-pointer text-dark-gray-text dark:text-light-secondary-100'
            onClick={() => {
              setShowPassword(true);
            }}
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='7.545' cy='7.545' r='2.045' stroke='currentColor' />
              <path
                d='M7.56285 11.9091C10.8348 11.9091 13.8213 7.81073 13.8213 7.81073C13.8213 7.81073 13.9615 7.30472 13.8213 7.09836C13.8213 7.09836 11.0115 3 7.56285 3C4.11419 3 1.30439 7.09836 1.30439 7.09836C1.16416 7.30472 1.16416 7.60437 1.30439 7.81073C1.30439 7.81073 4.11419 11.9091 7.56285 11.9091Z'
                stroke='currentColor'
                stroke-linecap='round'
              />
            </svg>
          </span>
        );
      }
      if (error) {
        return (
          <span>
            <svg
              width='19'
              height='19'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='8' cy='8' r='6.5' stroke='#E71D36' />
              <path d='M8 7V12' stroke='#E71D36' stroke-linecap='round' />
              <path
                d='M8.5 4.5C8.5 4.77614 8.27614 5 8 5C7.72386 5 7.5 4.77614 7.5 4.5C7.5 4.22386 7.72386 4 8 4C8.27614 4 8.5 4.22386 8.5 4.5Z'
                fill='#E71D36'
              />
            </svg>
          </span>
        );
      }
    };

    return (
      <div
        dir={dir}
        className={cn(
          'font-yekan text-light-gray-inactivestates disabled:active:text-white',
          error
            ? ' active:text-light-error- focus-within:text-light-error-100'
            : 'focus-within:text-light-secondary-100 active:text-dark-gray-text',
          disabled && 'opacity-50',
        )}
      >
        <FormLabel
          className={cn('text-sm  my-8 mx-16 ', disabled && 'opacity-50 ')}
        >
          {label}
        </FormLabel>
        <FormControl>
          <div
            className={cn(
              inputVariants({ size, className }),
              disabled &&
                'opacity-50 active:border-opacity-50 focus-within:border-opacity-50',
              error
                ? 'border-light-error-100 active:border-light-error- focus-within:border-light-error-100'
                : 'focus-within:text-light-secondary-100 active:text-dark-gray-text',
            )}
          >
            <input
              disabled={disabled}
              id={formItemId}
              type={showPassword ? 'text' : type}
              className={cn(
                'bg-inherit	 text-base px-16   focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-dark-gray-text dark:text-light-secondary-100',
                className,
              )}
              ref={ref}
              {...props}
            />
            {changeAction()}
          </div>
        </FormControl>
        <FormMessage className='text-sm mx-16' />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
