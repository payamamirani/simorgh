import { forwardRef, type SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '../Icon/icons';
import type { InputSize } from '../Input/Input';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: InputSize;
  /** حالت خطا — aria-invalid را تنظیم می‌کند و ظاهر را به رنگ error تغییر می‌دهد */
  invalid?: boolean;
  /** متن اولیه‌ی خالی — به‌صورت گزینه‌ی غیرقابل‌انتخاب رندر می‌شود */
  placeholder?: string;
}

const base =
  'inline-flex w-full appearance-none items-center rounded-md border border-border bg-surface-raised pe-9 ' +
  'text-text transition-colors motion-reduce:transition-none ' +
  'hover:border-border-strong ' +
  'focus-visible:border-border-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
  'aria-invalid:border-error aria-invalid:hover:border-error ' +
  'aria-invalid:focus-visible:border-error aria-invalid:focus-visible:ring-error/30 ' +
  'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60';

const sizes: Record<InputSize, string> = {
  sm: 'h-8 ps-3 text-caption',
  md: 'h-10 ps-3 text-body',
  lg: 'h-12 ps-4 text-body',
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'md', invalid = false, placeholder, className, children, ...props }, ref) => {
    // aria-invalid می‌تواند از Field هم تزریق شده باشد — ادغام می‌شود نه جایگزین
    const ariaInvalid = invalid || Boolean(props['aria-invalid']);
    return (
      <span className="relative inline-block w-full">
        <select
          ref={ref}
          aria-invalid={ariaInvalid || undefined}
          className={cn(base, sizes[size], className)}
          {...props}
        >
        {placeholder !== undefined && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
        </select>
        <ChevronDownIcon
          size="sm"
          className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
      </span>
    );
  },
);

Select.displayName = 'Select';
