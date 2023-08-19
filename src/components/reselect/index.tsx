import { HelpCircle, Triangle } from 'lucide-react';
import React from 'react';
import Select, { ControlProps, components } from 'react-select';
import { cn } from '../../lib/utils';
import { FormLabel } from '../form';
const ReSelect = ({ label, dir, options, searchable, disabled, ...props }) => (
  <div dir={dir}>
    <FormLabel
      className={cn(
        'mx-8',
        disabled ? 'opacity-70 cursor-not-allowed' : 'text-dark-gray-text',
      )}
    >
      {label}
    </FormLabel>
    <Select
      isDisabled={disabled}
      isSearchable={searchable}
      isRtl={dir === 'rtl'}
      unstyled
      classNames={{
        control: (state) => {
          return cn(
            disabled && 'opacity-70 cursor-not-allowed',
            ' border rounded-lg text-sm my-8 border-light-gray-inactivestates text-light-gray-secondarytext font-yekan px-16',
            state.isFocused &&
              'border-light-secondary-100   text-light-secondary-100 rounded-none !rounded-t-lg ',
          );
        },
        menu: () => {
          return cn(
            'font-yekan border cursor-pointer rounded-b-8 bg-[#eef4f7] px-16 text-sm shadow-md',
          );
        },
        option: () => {
          return cn('p-12 my-8');
        },
      }}
      options={options}
      components={{
        Input: (props: ControlProps) => {
          return (
            <div dir={dir} className='flex items-center '>
              <HelpCircle className='h-5 w-5 mx-8' />
              <components.Input {...props} />
            </div>
          );
        },
        DropdownIndicator: ({ isFocused }) => {
          return (
            <Triangle
              fill='currentcolor'
              className={cn(
                ' h-2 w-2',
                isFocused ? '!rotate-0' : ' rotate-180',
              )}
            />
          );
        },
      }}
      {...props}
    />
  </div>
);

export { ReSelect };
