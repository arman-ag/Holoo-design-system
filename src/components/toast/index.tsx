'use client';

import { ToastTitle } from '@radix-ui/react-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from './toastComponent';
import { useToast } from './use-toast';

export function Toaster({ dir = 'rtl' }) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1 '>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription className='w-11/12'>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose dir={dir} />
          </Toast>
        );
      })}
      <ToastViewport dir={dir} />
    </ToastProvider>
  );
}
