import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

/** جایگزین بارگذاری — سایه‌ی محو محتوا تا زمان آماده شدن */
export const Skeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'animate-pulse rounded-md bg-border motion-reduce:animate-none',
        className,
      )}
      {...props}
    />
  ),
);

Skeleton.displayName = 'Skeleton';
