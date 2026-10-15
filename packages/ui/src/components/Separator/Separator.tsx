import { forwardRef, type HTMLAttributes } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../utils/cn';

export interface SeparatorProps extends SeparatorPrimitive.SeparatorProps {
  /** فقط تزئینی است؟ (اگر معنای واقعی دارد false کنید تا صفحه‌خوان بخواند) */
  decorative?: boolean;
}

/** خط جداکننده — افقی یا عمودی */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  ),
);

Separator.displayName = 'Separator';
