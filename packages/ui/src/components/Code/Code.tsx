import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

/** کد درون‌متنی — برای نام فایل، دستور و مقدار فنی */
export const Code = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      dir="auto"
      className={cn(
        'rounded-sm bg-border/60 px-1.5 py-0.5 font-mono text-caption text-text',
        className,
      )}
      {...props}
    />
  ),
);

Code.displayName = 'Code';
