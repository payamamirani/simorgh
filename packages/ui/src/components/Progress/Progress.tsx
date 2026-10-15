import { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../utils/cn';

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  /** ۰ تا ۱۰۰ — undefined یعنی نامعین */
  value?: number | null;
}

/**
 * نوار پیشرفت — با width (نه transform) تا در RTL از راست پر شود.
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      value={value ?? undefined}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-border', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-primary transition-[width] motion-reduce:transition-none"
        style={{ width: value != null ? `${Math.min(100, Math.max(0, value))}%` : undefined }}
      />
    </ProgressPrimitive.Root>
  ),
);

Progress.displayName = 'Progress';
