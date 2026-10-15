import { forwardRef, type ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../utils/cn';

/**
 * Radio — انتخاب یک گزینه از چند مورد. منطق و کیبورد (فلش‌ها) از Radix.
 *
 * <RadioGroup defaultValue="a" label?...>
 *   <Radio value="a" label="گزینه اول" description="..." />
 * </RadioGroup>
 */

export interface RadioGroupProps extends Omit<RadioGroupPrimitive.RadioGroupProps, 'children'> {
  /** حالت خطا — aria-invalid روی کل گروه */
  invalid?: boolean;
  children?: ReactNode;
}

export interface RadioProps extends Omit<RadioGroupPrimitive.RadioGroupItemProps, 'children'> {
  /** متن کنار دکمه */
  label?: ReactNode;
  /** توضیح تکمیلی زیر لیبل */
  description?: string;
  children?: ReactNode;
}

const itemRoot =
  'peer size-5 mt-0.5 shrink-0 rounded-full border border-border-strong bg-surface-raised ' +
  'transition-colors motion-reduce:transition-none ' +
  'hover:border-primary ' +
  'focus-visible:border-border-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ' +
  'data-[state=checked]:border-primary ' +
  'aria-invalid:border-error ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ invalid = false, className, ...props }, ref) => {
    // aria-invalid می‌تواند از Field هم تزریق شده باشد — ادغام می‌شود نه جایگزین
    const ariaInvalid = invalid || Boolean(props['aria-invalid']);
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        aria-invalid={ariaInvalid || undefined}
        className={cn('flex flex-col gap-2', className)}
        {...props}
      />
    );
  },
);
RadioGroup.displayName = 'RadioGroup';

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ label, description, className, id, ...props }, ref) => {
    const item = (
      <RadioGroupPrimitive.Item ref={ref} id={id} className={itemRoot} {...props}>
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="size-2.5 rounded-full bg-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );

    if (!label && !description) return item;

    return (
      <label
        htmlFor={id}
        className={cn(
          'flex w-fit cursor-pointer items-start gap-2',
          'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
          className,
        )}
      >
        {item}
        <span className="flex flex-col gap-0.5">
          {label && <span className="text-body leading-normal text-text">{label}</span>}
          {description && <span className="text-caption text-text-muted">{description}</span>}
        </span>
      </label>
    );
  },
);
Radio.displayName = 'Radio';
