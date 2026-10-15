import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** اندازه‌ی ورودی (با دکمه هم‌تراز است) */
  size?: InputSize;
  /** حالت خطا — aria-invalid را تنظیم می‌کند و ظاهر را به رنگ danger تغییر می‌دهد */
  invalid?: boolean;
}

const base =
  'inline-flex w-full items-center rounded-md border border-border bg-surface-raised ' +
  'text-text placeholder:text-text-muted ' +
  'transition-colors motion-reduce:transition-none ' +
  'hover:border-border-strong ' +
  'focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 ' +
  'aria-invalid:border-danger aria-invalid:hover:border-danger ' +
  'aria-invalid:focus-visible:border-danger aria-invalid:focus-visible:ring-danger/25 ' +
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60';

const sizes: Record<InputSize, string> = {
  sm: 'h-8 px-3 text-caption',
  md: 'h-10 px-3 text-body',
  lg: 'h-12 px-4 text-body',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', invalid = false, className, type = 'text', ...props }, ref) => {
    // aria-invalid می‌تواند از Field هم تزریق شده باشد — ادغام می‌شود نه جایگزین
    const ariaInvalid = invalid || Boolean(props['aria-invalid']);
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={ariaInvalid || undefined}
        className={cn(base, sizes[size], className)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
