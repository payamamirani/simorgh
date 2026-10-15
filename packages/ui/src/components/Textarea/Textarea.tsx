import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** حالت خطا — aria-invalid را تنظیم می‌کند و ظاهر را به رنگ error تغییر می‌دهد */
  invalid?: boolean;
}

const base =
  'flex min-h-24 w-full resize-y rounded-md border border-border bg-surface-raised px-3 py-2 ' +
  'text-body leading-relaxed text-text placeholder:text-text-muted ' +
  'transition-colors motion-reduce:transition-none ' +
  'hover:border-border-strong ' +
  'focus-visible:border-border-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
  'aria-invalid:border-error aria-invalid:hover:border-error ' +
  'aria-invalid:focus-visible:border-error aria-invalid:focus-visible:ring-error/30 ' +
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ invalid = false, className, ...props }, ref) => {
    // aria-invalid می‌تواند از Field هم تزریق شده باشد — ادغام می‌شود نه جایگزین
    const ariaInvalid = invalid || Boolean(props['aria-invalid']);
    return (
      <textarea
        ref={ref}
        aria-invalid={ariaInvalid || undefined}
        className={cn(base, className)}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
