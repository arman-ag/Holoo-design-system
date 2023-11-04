// @ts-nocheck

import { Search, Triangle } from 'lucide-react';
import React, { useState } from 'react';
import { components } from 'react-select';
import { cn } from '../../lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip';
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
          <div className='border flex items-center justify-center min-w-[28px] min-h-[28px] border-primary100   rounded-full '>
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='  overflow-hidden text-ellipsis whitespace-nowrap'>
              {rest.isMulti && (
                <input
                  type='checkbox'
                  className='mx-[.5rem]'
                  checked={isSelected}
                />
              )}
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </components.Option>
  );
};

const MultiValueContainer = ({ children, ...props }) => {
  return props.selectProps.menuIsOpen ? null : (
    <components.MultiValueContainer {...props}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='border max-w-[100px] ml-[5px] rounded-16 px-[.5rem] py-[6px] border-primary100 active:text-primary130 active:bg-primary20'>
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </components.MultiValueContainer>
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
const Control = ({ error, children, ...props }) => {
  return <components.Control {...props}>{children}</components.Control>;
};
const SingleValue = ({ children, ...innerProps }) => {
  return (
    <components.SingleValue {...innerProps}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='max-w-[150px] text-ellipsis whitespace-nowrap overflow-hidden '>
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </components.SingleValue>
  );
};
export {
  Control,
  DropdownIndicator,
  MultiValueContainer,
  Option,
  SingleValue,
  ValueContainer,
};
