// @ts-nocheck

import { Search, Triangle } from 'lucide-react';
import React, { useState } from 'react';
import { MultiValueGenericProps, components } from 'react-select';
import { cn } from '../../lib/utils';
import { FormLabel } from '../form';
const ValueContainer = ({ children, ...innerProps }) => {
  const filterItems = () => {
    return children[0]?.length >= 2
      ? [
          children[0].filter((item, index) => {
            return index === 0;
          }),
          children[1],
        ]
      : children;
  };
  return (
    <components.ValueContainer {...innerProps}>
      <div className={cn('flex items-center	')}>
        {innerProps.selectProps.isSearchable &&
          innerProps.selectProps.menuIsOpen && (
            <Search
              width={'15px'}
              height={'15px'}
              className={cn(innerProps.isRtl ? 'ml-2' : 'mr-2')}
            />
          )}
        {filterItems()}
        {children[0]?.length > 1 && !innerProps.selectProps.menuIsOpen && (
          <div className='border flex items-center justify-center min-w-[28px] min-h-[28px] border-light-secondary-100   rounded-full '>
            {children[0]?.length - 1}+
          </div>
        )}
      </div>
    </components.ValueContainer>
  );
};
const Option = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);
  const [isActive, setIsActive] = useState(false);

  let bg = 'transparent';
  if (isFocused) bg = '#D1E9F7';
  if (isActive) bg = '#B2D4FF';

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex ',
  };

  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };
  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      {rest.isMulti && (
        <input type='checkbox' className='mx-8' checked={isSelected} />
      )}
      {children}
    </components.Option>
  );
};

const MultiValueContainer = (props: MultiValueGenericProps<ColourOption>) => {
  return props.selectProps.menuIsOpen ? null : (
    <components.MultiValueContainer {...props} />
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Triangle
        fill='currentcolor'
        className={cn(
          ' h-2 w-2',
          props.selectProps.menuIsOpen ? '!rotate-0' : ' rotate-180',
        )}
      />
    </components.DropdownIndicator>
  );
};
const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      {children}
      <FormLabel
        htmlFor={props?.selectProps.inputId}
        className={cn(
          'absolute bottom-[45px] text-base ',
          props.selectProps.menuIsOpen
            ? 'text-light-secondary-100'
            : 'text-light-gray-secondarytext',
        )}
      >
        {props.selectProps.label}
      </FormLabel>
    </components.Control>
  );
};
export {
  Control,
  DropdownIndicator,
  MultiValueContainer,
  Option,
  ValueContainer,
};
