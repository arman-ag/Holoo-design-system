import * as React from 'react';

import { cn } from '../../lib/utils';
import { FormLabel, FormMessage, useFormField } from '../form';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, dir, disabled, label, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (
      <div
        className={cn(
          error &&
            ' active:text-light-error- focus-within:text-light-error-100',
          'font-yekan dark:text-dark-gray-secondarytext focus-within:text-light-gray-secondarytext ',
        )}
        dir={dir}
      >
        <FormLabel
          className={cn('text-sm my-14  mx-16  ', disabled && 'opacity-30 ')}
        >
          {label}
        </FormLabel>
        <textarea
          id={formItemId}
          disabled={disabled}
          className={cn(
            className,
            'flex  my-8 min-h-[60px] w-full rounded-16 text-base  border border-light-gray-inactivestates active:border-dark-gray-text bg-transparent px-16 py-8   placeholder:text-light-gray-textfield  placeholder:text-base focus-visible:outline-none focus-visible:bg-light-gray-disable disabled:cursor-not-allowed  disabled:opacity-50 disabled:border-opacity-50 dark:focus:bg-dark-secondary-2 dar ',
            error &&
              'border-light-error-100 active:border-light-error- focus-within:border-light-error-100',
          )}
          ref={ref}
          {...props}
        />
        <FormMessage className='text-sm mx-16' />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
