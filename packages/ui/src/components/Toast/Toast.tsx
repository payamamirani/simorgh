import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cn } from '../../utils/cn';
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckIcon,
  InfoIcon,
  XIcon,
} from '../Icon/icons';

/**
 * Toast — پیام گذرای عملیات.
 *
 * استفاده:
 *   <Toaster />          ← یک‌بار در ریشه‌ی اپ
 *   toast({ title: 'ذخیره شد', tone: 'success' })
 */

export type ToastTone = 'success' | 'warning' | 'danger' | 'info';

export interface ToastOptions {
  title: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  /** میلی‌ثانیه — پیش‌فرض ۵۰۰۰ */
  duration?: number;
}

interface ToastItem extends Required<Pick<ToastOptions, 'title' | 'tone'>> {
  id: number;
  description?: ReactNode;
  duration: number;
}

/* ---------- استور سبک بدون وابستگی ---------- */

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let idCounter = 0;

const tones: Record<ToastTone, string> = {
  success: 'bg-success/12',
  warning: 'bg-warning/12',
  danger: 'bg-danger/12',
  info: 'bg-info/12',
};

const iconTones: Record<ToastTone, string> = {
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
};

const icons: Record<ToastTone, ReactNode> = {
  success: <CheckIcon />,
  warning: <AlertTriangleIcon />,
  danger: <AlertCircleIcon />,
  info: <InfoIcon />,
};

/** فراخوانی از هر جای اپ — فقط وقتی که داخل <Toaster> است کار می‌کند */
export function toast(options: ToastOptions) {
  window.dispatchEvent(new CustomEvent('simorgh:toast', { detail: options }));
}

export function Toaster() {
  const [items, setItems] = useState<ToastItem[]>([]);
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    const handler = (event: Event) => {
      const options = (event as CustomEvent<ToastOptions>).detail;
      const id = ++idCounter;
      const duration = options.duration ?? 5000;
      setItems((prev) => [...prev, { id, duration, tone: 'info', ...options }]);
      timers.current.set(
        id,
        setTimeout(() => {
          setItems((prev) => prev.filter((t) => t.id !== id));
          timers.current.delete(id);
        }, duration),
      );
    };
    window.addEventListener('simorgh:toast', handler);
    return () => {
      window.removeEventListener('simorgh:toast', handler);
      timers.current.forEach(clearTimeout);
      timers.current.clear();
    };
  }, []);

  const contextValue = useMemo<ToastContextValue>(() => ({ toast }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastPrimitive.Provider swipeDirection="left" duration={Infinity}>
        {items.map((item) => (
          <ToastPrimitive.Root
            key={item.id}
            role={item.tone === 'danger' ? 'alert' : 'status'}
            className={cn(
              'pointer-events-auto flex w-full items-start gap-3 rounded-md p-4 shadow-md',
              'border border-border bg-surface-raised',
              'data-[swipe=move]:opacity-90',
              tones[item.tone],
            )}
          >
            <span className={cn('mt-0.5 shrink-0', iconTones[item.tone])}>{icons[item.tone]}</span>
            <div className="flex flex-1 flex-col gap-0.5">
              <ToastPrimitive.Title className="text-body font-medium text-text">
                {item.title}
              </ToastPrimitive.Title>
              {item.description && (
                <ToastPrimitive.Description className="text-caption leading-relaxed text-text-muted">
                  {item.description}
                </ToastPrimitive.Description>
              )}
            </div>
            <ToastPrimitive.Close
              aria-label="بستن"
              className={cn(
                'inline-flex size-6 shrink-0 items-center justify-center rounded-sm',
                'text-text-muted transition-colors hover:bg-border hover:text-text',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25',
              )}
            >
              <XIcon size="sm" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport
          className={cn(
            'fixed bottom-0 left-1/2 z-50 flex w-full max-w-sm -translate-x-1/2',
            'flex-col gap-2 p-4 outline-none',
          )}
        />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

/** دسترسی به toast از طریق هنگ — در آینده برای API مبتنی بر hook */
export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast باید داخل <Toaster> استفاده شود');
  return context;
}
