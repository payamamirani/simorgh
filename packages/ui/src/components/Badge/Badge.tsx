import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeVariant = 'soft' | 'solid';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
}

const soft: Record<BadgeTone, string> = {
  neutral: 'bg-text/10 text-text',
  primary: 'bg-primary/12 text-primary',
  success: 'bg-success/12 text-success',
  warning: 'bg-warning/12 text-warning',
  danger: 'bg-danger/12 text-danger',
  info: 'bg-info/12 text-info',
};

/** رنگ متن هر حالت solid از توکن‌های on-* می‌آید — کنتراست در بیلد چک می‌شود */
const solid: Record<BadgeTone, string> = {
  neutral: 'bg-text text-surface',
  primary: 'bg-primary text-on-primary',
  success: 'bg-success text-on-success',
  warning: 'bg-warning text-on-warning',
  danger: 'bg-danger text-on-danger',
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
