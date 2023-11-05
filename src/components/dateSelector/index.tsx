'use client';
import * as React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import transition from 'react-element-popper/animations/transition';
import DatePicker from 'react-multi-date-picker';
import { Input } from '../input';

const DateSelector = ({ label, size, placeholder, ...props }) => {
  return (
    <DatePicker
      animations={[transition()]}
      format='YYYY/MM/DD '
      calendar={persian}
      locale={persian_fa}
      {...props}
      render={
        <Input
          autoComplete='off'
          dir='rtl'
          placeholder={placeholder}
          label={label}
          inputSize={size}
        />
      }
    />
  );
};

export default DateSelector;
