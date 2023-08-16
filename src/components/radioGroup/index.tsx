'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../lib/utils';
import { Label } from '../label';
const radioButtonVariants = cva(
  'mx-2  aspect-square  rounded-full border dark:border-light-secondary-80 dark:text-light-secondary-80 dark:hover:border-light-secondary-40 dark:hover:text-light-secondary-40 border-light-secondary-100 hover:border-light-secondary-120  hover:text-light-secondary-120 text-light-secondary-100 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: { sm: 'h-4 w-4', md: 'h-6 w-6' },
      defaultVariants: {
        size: 'sm',
      },
    },
  },
);
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, label, size, disabled, id, ...props }, ref) => {
  return (
    <div>
      <Label
        htmlFor={id}
        className={cn(
          size === 'md' && '!text-xxl',
          disabled ? 'opacity-70 cursor-not-allowed' : 'text-dark-gray-text',
        )}
      >
        {label}
      </Label>
      <RadioGroupPrimitive.Item
        id={id}
        disabled={disabled}
        ref={ref}
        className={cn(radioButtonVariants({ size, className }))}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
          <Circle
            className={cn(
              size === 'md' && '!h-4 !w-4',
              'h-3 w-3 fill-current text-current ',
            )}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
