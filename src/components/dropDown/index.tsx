// @ts-nocheck
import { Triangle } from 'lucide-react';
import React from 'react';
import Select, { MultiValueGenericProps, components } from 'react-select';
import { cn } from '../../lib/utils';
import { FormLabel } from '../form';
const DropDown = ({ label, dir, options, searchable, disabled, ...props }) => {
  const CustomMenuWithInput = ({ innerProps, ...props }) => {
    return <div className='bg-red-300 '>sa</div>;
  };
  const MultiValueContainer = (props: MultiValueGenericProps<ColourOption>) => {
    return (
      <span className='border mx-2 rounded-16 px-8 py-[6px] border-light-secondary-100 active:text-light-secondary-130 active:bg-light-secondary-20 '>
        <components.MultiValueContainer {...props} />
      </span>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Triangle
          fill='currentcolor'
          className={cn(' h-2 w-2', options ? '!rotate-0' : ' rotate-180')}
        />
      </components.DropdownIndicator>
    );
  };
  return (
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
        isMulti
        isDisabled={disabled}
        isSearchable={searchable}
        isRtl={dir === 'rtl'}
        unstyled
        classNames={{
          control: (state) => {
            state;
            return cn(
              disabled && 'opacity-70 cursor-not-allowed',
              ' border rounded-lg text-sm my-8 border-light-gray-inactivestates text-light-gray-secondarytext font-yekan px-16',
              state.menuIsOpen &&
                'border-light-secondary-100   text-light-secondary-100 rounded-none !rounded-t-lg ',
            );
          },

          menu: () => {
            return cn(
              'font-yekan border  rounded-b-8 bg-[#eef4f7] px-16 text-sm shadow-md ',
            );
          },
          option: () => {
            return cn('!cursor-pointer p-12 my-8');
          },
        }}
        options={options}
        components={{
          // Control: CustomMenuWithInput,
          MultiValueContainer,
          DropdownIndicator,
        }}
        {...props}
      />
    </div>
  );
};

export { DropDown };
