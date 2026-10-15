import { forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

/**
 * محتوای قابل‌دسترس فقط برای صفحه‌خوان‌ها — برای لیبل‌دهی آیکون‌ها
 * و متن‌های کمکی که بصری لازم نیستند.
 */
export const VisuallyHidden = forwardRef<HTMLSpanElement, PropsWithChildren & HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('sr-only', className)} {...props} />
  ),
);

VisuallyHidden.displayName = 'VisuallyHidden';
