import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeVariant = 'soft' | 'solid';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

const soft: Record<BadgeTone, string> = {
  neutral: 'bg-text/10 text-text',
  primary: 'bg-primary-subtle text-primary',
  success: 'bg-success-subtle text-success',
  warning: 'bg-warning-subtle text-warning',
  error: 'bg-error-subtle text-error',
  info: 'bg-info-subtle text-info',
};

/** رنگ متن هر حالت solid از توکن‌های on-* می‌آید — کنتراست در بیلد چک می‌شود */
const solid: Record<BadgeTone, string> = {
  neutral: 'bg-text text-surface',
  primary: 'bg-primary text-on-primary',
  success: 'bg-success text-on-success',
  warning: 'bg-warning text-on-warning',
  error: 'bg-error text-on-error',
  info: 'bg-info text-on-info',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ tone = 'neutral', variant = 'soft', className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-caption font-medium',
        variant === 'solid' ? solid[tone] : soft[tone],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = 'Badge';
