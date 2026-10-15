import { Children, cloneElement, useId, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** لیبل فیلد — با htmlFor به کنترل وصل می‌شود */
  label?: ReactNode;
  /** متن راهنمای عادی (خاکستری) */
  hint?: string;
  /** پیام خطا — کنترل را invalid و متن را قرمز می‌کند و با aria-describedby وصل می‌شود */
  error?: string;
  /** نشان ستاره + aria-required روی کنترل */
  required?: boolean;
  /** کنترل فرم (Input، Select، Textarea و ...) — id و aria وصل‌ها خودکار تزریق می‌شوند */
  children: ReactElement;
}

/**
 * Field — سیم‌کشی خودکار دسترس‌پذیری فرم:
 * لیبل با htmlFor به کنترل وصل می‌شود، پیام خطا/راهنما با aria-describedby،
 * و خطا aria-invalid را روی کنترل تنظیم می‌کند. بدون هیچ بسته‌شدنی — هر کنترلی قبول می‌کند.
 */
export const Field = ({
  label,
  hint,
  error,
  required = false,
  className,
  children,
  ...props
}: FieldProps) => {
  const autoId = useId();
  const child = Children.only(children) as ReactElement<Record<string, unknown>>;
  const childProps = (child.props ?? {}) as Record<string, unknown>;
  const controlId = (childProps.id as string | undefined) ?? `field-${autoId}`;
  const messageId = `field-${autoId}-message`;
  const message = error ?? hint;

  // فقط کلیدهای تعریف‌شده تزریق می‌شوند — مقدار undefined اتریبیوت صریح کنترل را حذف می‌کند
  const injected: Record<string, unknown> = { id: controlId };
  if (error) {
    injected['aria-invalid'] = true;
  } else if (childProps['aria-invalid'] !== undefined) {
    injected['aria-invalid'] = childProps['aria-invalid'];
  }
  if (required) {
    injected['aria-required'] = true;
  }
  const describedBy = message ? messageId : childProps['aria-describedby'];
  if (describedBy !== undefined && describedBy !== null) {
    injected['aria-describedby'] = describedBy;
  }

  const control = cloneElement(child, injected);

  return (
    <div className={cn('flex w-full flex-col gap-2', className)} {...props}>
      {label && (
        <label htmlFor={controlId} className="text-caption font-medium text-text">
          {label}
          {required && (
            <span aria-hidden="true" className="ms-0.5 text-error">
              *
            </span>
          )}
        </label>
      )}
      {control}
      {message && (
        <p
          id={messageId}
          className={error ? 'text-caption text-error' : 'text-caption text-text-muted'}
        >
          {message}
        </p>
      )}
    </div>
  );
};
