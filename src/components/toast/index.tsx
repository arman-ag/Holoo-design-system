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

export function Toaster({ dir = 'rtl' }) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid  '>
              {title && (
                <div className='flex items-start mt-[.5rem] justify-between'>
                  <ToastTitle>{title}</ToastTitle>
                  <div className='flex'>
                    {action}
                    <ToastClose dir={dir} />
                  </div>
                </div>
              )}
              {description && (
                <div>
                  <ToastDescription>{description}</ToastDescription>
                </div>
              )}
            </div>
          </Toast>
        );
      })}
      <ToastViewport dir={dir} />
    </ToastProvider>
  );
}
