import { forwardRef, type ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../utils/cn';
import { CheckIcon, MinusIcon } from '../Icon/icons';

export interface CheckboxProps
  extends Omit<CheckboxPrimitive.CheckboxProps, 'children' | 'asChild'> {
  /** متن کنار چک‌باکس */
  label?: ReactNode;
  /** توضیح تکمیلی زیر لیبل */
  description?: string;
  /** حالت خطا — aria-invalid تنظیم می‌کند و رنگ error می‌گیرد */
  invalid?: boolean;
}

const root =
  'peer size-5 shrink-0 rounded-sm border border-border-strong bg-surface-raised ' +
  'mt-0.5 transition-colors motion-reduce:transition-none ' +
  'hover:border-primary ' +
  'focus-visible:border-border-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
  'data-[state=checked]:border-primary data-[state=checked]:bg-primary ' +
  'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary ' +
  'aria-invalid:border-error aria-invalid:data-[state=checked]:border-error aria-invalid:data-[state=checked]:bg-error ' +
  'aria-invalid:data-[state=indeterminate]:border-error aria-invalid:data-[state=indeterminate]:bg-error ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, description, invalid = false, className, id, ...props }, ref) => {
    const checkbox = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        aria-invalid={invalid || undefined}
        className={root}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-on-primary">
          {props.checked === 'indeterminate' ? (
            <MinusIcon strokeWidth={3} className="size-3" />
          ) : (
            <CheckIcon strokeWidth={3} className="size-3" />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (!label && !description) return checkbox;

    return (
      <label
        htmlFor={id}
        className={cn(
          'flex w-fit cursor-pointer items-start gap-2',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
          className,
        )}
      >
        {checkbox}
        <span className="flex flex-col gap-0.5">
          {label && <span className="text-body leading-normal text-text">{label}</span>}
          {description && <span className="text-caption text-text-muted">{description}</span>}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
