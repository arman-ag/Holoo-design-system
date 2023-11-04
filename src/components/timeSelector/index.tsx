'use client';
import * as React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { Input } from '../input';
const TimeSelector = ({ label, size, placeholder, ...props }) => {
  return (
    <DatePicker
      disableDayPicker
      calendar={persian}
      locale={persian_fa}
      format='HH:mm:ss'
      // animations={[transition()]}
      plugins={[<TimePicker />]}
      {...props}
      render={
        <Input
          dir='rtl'
          placeholder={placeholder}
          label={label}
          inputSize={size}
        />
      }
    />
  );
};

export default TimeSelector;
