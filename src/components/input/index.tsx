// @ts-nocheck
'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';
import { FormControl, FormLabel, FormMessage, useFormField } from '../form';
import CloseEye from './../../assets/icons/closeeye.svg';
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
  ({ label, className, size, dir, type, name, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { error, formItemId } = useFormField();

    const changeAction = () => {
      switch (type) {
        case 'password':
          return showPassword ? (
            <span
              className='cursor-pointer text-dark-gray-text'
              onClick={() => {
                setShowPassword(false);
              }}
            >
              <CloseEye />
            </span>
          ) : (
            <span
              className='cursor-pointer text-dark-gray-text'
              onClick={() => {
                setShowPassword(true);
              }}
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='7.545' cy='7.545' r='2.045' stroke='#191919' />
                <path
                  d='M7.56285 11.9091C10.8348 11.9091 13.8213 7.81073 13.8213 7.81073C13.8213 7.81073 13.9615 7.30472 13.8213 7.09836C13.8213 7.09836 11.0115 3 7.56285 3C4.11419 3 1.30439 7.09836 1.30439 7.09836C1.16416 7.30472 1.16416 7.60437 1.30439 7.81073C1.30439 7.81073 4.11419 11.9091 7.56285 11.9091Z'
                  stroke='#191919'
                  stroke-linecap='round'
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
          'font-yekan text-light-gray-inactivestates',
          error
            ? ' active:text-light-error- focus-within:text-light-error-100'
            : 'focus-within:text-light-secondary-100 active:text-dark-gray-text',
        )}
      >
        <FormLabel className='text-sm  my-8 mx-16'>{label}</FormLabel>
        <div
          className={cn(
            inputVariants({ size, className }),
            error
              ? 'border-light-error-100 active:border-light-error- focus-within:border-light-error-100'
              : 'focus-within:text-light-secondary-100 active:text-dark-gray-text',
          )}
        >
          <FormControl>
            <input
              id={formItemId}
              type={showPassword ? 'text' : type}
              className={cn(
                ' text-base px-16 transition-colors  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-dark-gray-text',
                className,
              )}
              ref={ref}
              {...props}
            />
          </FormControl>
          {changeAction()}
        </div>
        <FormMessage className='text-sm mx-16' />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
