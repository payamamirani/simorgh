import { forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../utils/cn';

/**
 * Tooltip — توضیح کوتاه غیرضروری روی هاور/فوکوس.
 * نکته: محتوای مهم نباید فقط در تولتیپ باشد (قابل دسترس با لمس نیست).
 *
 * <TooltipProvider>  ← یک‌بار در ریشه‌ی اپ
 *   <Tooltip content="متن">
 *     <Tooltip.Trigger asChild><Button>؟</Button></Tooltip.Trigger>
 *   </Tooltip>
 */

export interface TooltipProps extends Omit<TooltipPrimitive.TooltipProps, 'children'> {
  /** متن تولتیپ */
  content: React.ReactNode;
  children: React.ReactNode;
  /** سمت نمایش */
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<HTMLDivElement, TooltipPrimitive.TooltipContentProps>(
  ({ className, sideOffset = 6, ...props }, ref) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 max-w-72 rounded-md bg-text px-2.5 py-1.5 text-caption text-surface shadow-md',
          'focus-visible:outline-none',
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = 'Tooltip.Content';

const TooltipRoot = ({ content, children, ...props }: TooltipProps) => (
  <TooltipPrimitive.Root {...props}>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <TooltipContent>{content}</TooltipContent>
  </TooltipPrimitive.Root>
);

export const Tooltip = Object.assign(TooltipRoot, {
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
