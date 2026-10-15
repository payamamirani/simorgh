import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

/** کلید کیبورد — مثل ⌘ یا Ctrl در متن‌های راهنما */
export const Kbd = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      dir="ltr"
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1.5',
        'border border-border bg-surface-raised font-mono text-caption text-text-muted shadow-sm',
        className,
      )}
      {...props}
    />
  ),
);

Kbd.displayName = 'Kbd';
