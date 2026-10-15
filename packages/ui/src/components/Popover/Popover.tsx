import { forwardRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../utils/cn';

/**
 * Popover — محتوای شناور با تعامل (فرم کوچک، فیلترها).
 * برای متن کوتاهِ غیرضروری Tooltip را ببینید.
 *
 * <Popover>
 *   <Popover.Trigger asChild><Button>فیلترها</Button></Popover.Trigger>
 *   <Popover.Content>...</Popover.Content>
 * </Popover>
 */

export type PopoverProps = PopoverPrimitive.PopoverProps;

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = forwardRef<HTMLDivElement, PopoverPrimitive.PopoverContentProps>(
  ({ className, sideOffset = 6, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-lg border border-border bg-surface-raised p-4 shadow-lg',
          'focus-visible:outline-none',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = 'Popover.Content';

export const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Close: PopoverClose,
  Content: PopoverContent,
});
