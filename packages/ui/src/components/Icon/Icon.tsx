import { forwardRef, type SVGProps } from 'react';
import { cn } from '../../utils/cn';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: IconSize;
  /**
   * نام قابل‌دسترس آیکون — فقط وقتی بده که آیکون «معنادار» است نه تزئینی.
   * بدون label، آیکون aria-hidden می‌شود تا صفحه‌خوان آن را نخواند.
   */
  label?: string;
}

const sizes: Record<IconSize, string> = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

/** پایه‌ی همه‌ی آیکون‌های سیمرغ — stroke با currentColor (رنگ از متن والد) */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', label, className, children, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      className={cn('shrink-0', sizes[size], className)}
      {...props}
    >
      {children}
    </svg>
  ),
);

Icon.displayName = 'Icon';
