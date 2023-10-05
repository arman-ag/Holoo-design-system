'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ReactComponent as CloseEyeIcon } from '../../assets/icons/closeeye.svg';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/Warning.svg';
import { cn } from '../../lib/utils';
import { FormControl, FormLabel, FormMessage, useFormField } from '../form';

const inputVariants = cva(
  ' flex items-center justify-between w-full rounded-8 border border-light-gray-inactivestates focus-within:border-primary100 mt-8 ',
  {
    variants: {
      inputSize: {
        sm: 'h-32 py-8 px-12 ',
        md: 'h-40 py-12 px-16',
        lg: 'p-16 h-48',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, inputSize, disabled, className, dir, type, name, ...props },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { error, formItemId } = useFormField();

    const changeAction = () => {
      if (type === 'password') {
        return showPassword ? (
          <span
            className='cursor-pointer text-dark-gray-text dark:text-light-gray-inactivestates'
            onClick={() => {
              setShowPassword(false);
            }}
          >
            <CloseEyeIcon />
          </span>
        ) : (
          <span
            className='cursor-pointer text-dark-gray-text dark:text-light-gray-inactivestates'
            onClick={() => {
              setShowPassword(true);
            }}
          >
            <EyeIcon />
          </span>
        );
      }
      if (error) {
        return (
          <span>
            <WarningIcon />
          </span>
        );
      }
    };

    return (
      <div
        dir={dir}
        className={cn(
          'font-yekan text-light-gray-secondarytext ',
          error
            ? ' - focus-within:text-light-error-100'
            : 'focus-within:text-primary100 ',
          disabled && 'opacity-50',
        )}
      >
        <FormLabel
          className={cn('text-sm  mx-16  ', disabled && 'opacity-50 ')}
        >
          {label}
        </FormLabel>
        <FormControl>
          <div
            className={cn(
              inputVariants({ inputSize, className }),
              disabled && 'opacity-50  focus-within:border-opacity-50',
              error
                ? 'border-light-error-100 - focus-within:border-light-error-100'
                : 'focus-within:text-primary100 ',
            )}
          >
            <input
              disabled={disabled}
              id={formItemId}
              type={showPassword ? 'text' : type}
              className={cn(
                'bg-inherit !w-full !h-full bg-red-300	text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-dark-gray-text dark:text-light-gray-inactivestates',
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
