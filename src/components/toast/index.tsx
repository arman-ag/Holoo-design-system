'use client';
import { ToastTitle } from '@radix-ui/react-toast';
import * as React from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from './toastComponent';
import { useToast } from './use-toast';
('rollup-plugin-peer-deps-external');

export function Toaster({ variant, dir = 'rtl' }) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast variant={variant} key={id} {...props}>
            <div className=' w-full '>
              <div className='flex justify-end'>
                <ToastClose dir={dir} />
              </div>
              <div className='max-w-[14.5rem]'>
                {title && (
                  <ToastTitle className='mb-[.5rem]'>{title}</ToastTitle>
                )}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              <div className='flex justify-end'>{action}</div>
            </div>
          </Toast>
        );
      })}
      <ToastViewport dir={dir} />
    </ToastProvider>
  );
}
