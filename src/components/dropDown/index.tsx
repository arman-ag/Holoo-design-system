// @ts-nocheck

import React from 'react';
import Select from 'react-select';
import { cn } from '../../lib/utils';
import { useFormField } from '../form';
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
  const { error } = useFormField();
  return (
    <div className='h-[3.5rem] ' dir={dir}>
      <label className='mr-[1rem]  text-[.75rem] mb-[1rem]'>
        {props.label}
      </label>
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
              error && '!text-light-error-100 !border-light-error-100',
              disabled && 'opacity-70  cursor-not-allowed ',
              'border rounded-lg text-sm my-[.5rem] border-light-gray-inactivestates text-light-gray-secondarytext  px-[12px]',
              state.menuIsOpen &&
                'border-primary100   text-primary100 rounded-none !rounded-t-lg ',
            );
          },
          valueContainer: () => {
            return cn(' min-w-[100px]');
          },

          clearIndicator: () => {
            return cn('mx-[5px]');
          },
          menu: () => {
            return cn(' border rounded-b-8 bg-[#eef4f7]  text-sm shadow-md ');
          },
          placeholder: (state) => {
            return cn(state.selectProps.menuIsOpen && 'hidden');
          },
          option: () => {
            return cn(
              '!cursor-pointer p-12 my-[.5rem]   overflow-x-hidden  text-ellipsis whitespace-nowrap 	',
            );
          },
          noOptionsMessage: () => {
            return cn(' p-[.5rem');
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
