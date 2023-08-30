// @ts-nocheck

import React from 'react';
import Select from 'react-select';
import { cn } from '../../lib/utils';
import {
  Control,
  DropdownIndicator,
  MultiValueContainer,
  Option,
  SingleValue,
  ValueContainer,
} from './dropDownComponents';
interface dropDownProps {
  label: string;
  multiItem?: boolean;
  dir?: string;
  searchable?: boolean;
  disabled?: boolean;
  noOptionsMessage?: string;
  id?: number;
  options: { value: string; label: string }[];
}

const DropDown = ({
  multiItem,
  dir,
  options,
  searchable,
  disabled,
  noOptionsMessage,
  id,
  ...props
}: dropDownProps) => {
  return (
    <div className='h-[56px]' dir={dir}>
      <Select
        inputId={id}
        closeMenuOnSelect={!multiItem}
        hideSelectedOptions={false}
        options={options}
        noOptionsMessage={() => noOptionsMessage}
        isMulti={multiItem}
        isDisabled={disabled}
        isSearchable={searchable}
        isRtl={dir === 'rtl'}
        unstyled
        classNames={{
          control: (state) => {
            return cn(
              disabled && 'opacity-70  cursor-not-allowed ',
              'border rounded-lg text-sm my-8 border-light-gray-inactivestates text-light-gray-secondarytext font-yekan px-[12px]',
              state.menuIsOpen &&
                'border-light-secondary-100   text-light-secondary-100 rounded-none !rounded-t-lg ',
            );
          },
          valueContainer: () => {
            return cn(' min-w-[100px]');
          },
          // multiValue: () => {
          //   return cn(
          //     'border max-w-[100px] ml-[5px] rounded-16 px-8 py-[6px] border-light-secondary-100 active:text-light-secondary-130 active:bg-light-secondary-20',
          //   );
          // },
          clearIndicator: () => {
            return cn('mx-[5px]');
          },
          menu: () => {
            return cn(
              'font-yekan border rounded-b-8 bg-[#eef4f7]  text-sm shadow-md ',
            );
          },
          placeholder: (state) => {
            return cn(state.selectProps.menuIsOpen && 'hidden');
          },
          option: () => {
            return cn(
              '!cursor-pointer p-12 my-8   overflow-x-hidden  text-ellipsis whitespace-nowrap 	',
            );
          },
          noOptionsMessage: () => {
            return cn('font-yekan p-8');
          },
        }}
        components={{
          ValueContainer,
          MultiValueContainer,
          DropdownIndicator,
          Option,
          MultiValueRemove: () => null,
          ClearIndicator: () => null,
          Control,
          SingleValue,
        }}
        {...props}
      />
    </div>
  );
};

export { DropDown };
