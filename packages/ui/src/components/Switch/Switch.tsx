import { forwardRef, type ReactNode } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../utils/cn';

export interface SwitchProps extends Omit<SwitchPrimitive.SwitchProps, 'children'> {
  /** متن کنار کلید */
  label?: ReactNode;
  /** توضیح تکمیلی زیر لیبل */
  description?: string;
  /** حالت خطا — aria-invalid + رنگ error */
  invalid?: boolean;
}

const root =
  'peer mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent ' +
  'bg-border-strong transition-colors motion-reduce:transition-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
  'data-[state=checked]:bg-primary ' +
  'aria-invalid:data-[state=checked]:bg-error ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

const thumb =
  'block size-5 translate-x-0.5 rounded-full bg-surface-raised shadow-sm transition-transform motion-reduce:transition-none ' +
  'rtl:-translate-x-0.5 ' +
  'data-[state=checked]:translate-x-5 ' +
  'rtl:data-[state=checked]:-translate-x-5';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, description, invalid = false, className, id, ...props }, ref) => {
    // aria-invalid می‌تواند از Field هم تزریق شده باشد — ادغام می‌شود نه جایگزین
    const ariaInvalid = invalid || Boolean(props['aria-invalid']);

    const control = (
      <SwitchPrimitive.Root
        ref={ref}
        id={id}
        aria-invalid={ariaInvalid || undefined}
        className={root}
        {...props}
      >
        <SwitchPrimitive.Thumb className={thumb} />
      </SwitchPrimitive.Root>
    );

    if (!label && !description) return control;

    return (
      <label
        htmlFor={id}
        className={cn(
          'flex w-fit cursor-pointer items-start gap-2',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
          className,
        )}
      >
        {control}
        <span className="flex flex-col gap-0.5">
          {label && <span className="text-body leading-normal text-text">{label}</span>}
          {description && <span className="text-caption text-text-muted">{description}</span>}
        </span>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
