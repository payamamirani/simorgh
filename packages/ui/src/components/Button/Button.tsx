import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
import { Spinner } from '../../components/Spinner/Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** نوع ظاهری دکمه */
  variant?: ButtonVariant;
  /** اندازه دکمه */
  size?: ButtonSize;
  /** حالت بارگذاری — اسپینر نشان می‌دهد و دکمه را غیرفعال می‌کند */
  loading?: boolean;
  /** رندر به‌جای <button> روی المان فرزند (برای دکمه‌های لینک‌دار) */
  asChild?: boolean;
}

const base =
  'inline-flex select-none items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-colors motion-reduce:transition-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-surface ' +
  'disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-hover',
  secondary:
    'border border-border bg-surface-raised text-text hover:bg-border hover:border-border-strong',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-caption',
  md: 'h-10 px-4 text-body',
  lg: 'h-12 px-6 text-body',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      asChild = false,
      className,
      children,
      disabled,
      type,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    // در حالت asChild باید تنها فرزند، المان مصرف‌کننده باشد (Spinner نباید اضافه شود)
    const content = loading && !asChild ? (
      <>
        <Spinner size="sm" />
        {children}
      </>
    ) : (
      children
    );

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : (type ?? 'button')}
        disabled={asChild ? disabled : (disabled || loading)}
        aria-busy={loading || undefined}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
