'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../lib/utils';
const radioButtonVariants = cva(
  'mx-2 h-full w-full  aspect-square  rounded-full border dark:border-primary80 dark:text-primary80 dark:hover:border-primary40 dark:hover:text-primary40 border-primary100 hover:border-primary120  hover:text-primary120 text-primary100 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ',
  {
    variants: {
      size: { sm: 'h-4 w-4 ', md: 'h-6 w-6' },
      font: { sm: 'text-[1rem]', md: 'text-[2rem]' },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);
interface RadioGroupProps extends VariantProps<typeof radioButtonVariants> {
  label: string;
  disabled: boolean;
  children: React.ReactElement;
  id: string;
  value: string;
  className: string;
}
type combineType = React.ElementRef<typeof RadioGroupPrimitive.Item> &
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

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

const RadioGroupItem = React.forwardRef<combineType, RadioGroupProps>(
  (
    { className, children, label, size, value, disabled, id, ...props },
    ref,
  ) => {
    return (
      <div>
        <RadioGroupPrimitive.Item
          value={value}
          id={id}
          disabled={disabled}
          ref={ref}
          className={cn(radioButtonVariants({ size, className }))}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
            <Circle
              className={cn(
                size === 'md' && '!h-5 !w-5',
                'h-3 w-3 fill-current text-current ',
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
      </div>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
