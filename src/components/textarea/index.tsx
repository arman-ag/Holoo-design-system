import * as React from 'react';

import { cn } from '../../lib/utils';
import { FormControl, FormLabel, FormMessage, useFormField } from '../form';

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
          'focus-within:text-primary100  font-yekan dark:text-dark-gray-secondarytext  ',
        )}
        dir={dir}
      >
        <FormLabel
          htmlFor={formItemId}
          className={cn('text-sm my-14   mx-16  ', disabled && 'opacity-30 ')}
        >
          {label}
        </FormLabel>
        <FormControl>
          <textarea
            id={formItemId}
            disabled={disabled}
            className={cn(
              'flex ring-offset-8  ring-light-gray-inactivestates  placeholder:text-light-gray-textfield text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-primary100	 ring-1 disabled:cursor-not-allowed disabled:opacity-50',
              className,
              error &&
                ' ring-light-error-100 focus-visible:ring-light-error-100',
            )}
            ref={ref}
            {...props}
          />
        </FormControl>
        <FormMessage className='text-sm mx-16' />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
