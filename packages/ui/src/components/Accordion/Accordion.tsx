import { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '../Icon/icons';

/**
 * Accordion — بخش‌های تاشو محتوا.
 *
 * <Accordion type="single" collapsible>
 *   <Accordion.Item value="a">
 *     <Accordion.Trigger>تیتر</Accordion.Trigger>
 *     <Accordion.Content>محتوا</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 */

export type AccordionProps = AccordionPrimitive.AccordionSingleProps;

const AccordionItem = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('border-b border-border', className)} {...props} />
  ),
);
AccordionItem.displayName = 'Accordion.Item';

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionPrimitive.AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between gap-4 py-4 text-start',
          'text-body font-medium text-text transition-colors hover:text-primary',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="shrink-0 text-text-muted transition-transform duration-200 motion-reduce:transition-none data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = 'Accordion.Trigger';

const AccordionContent = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionContentProps>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn('overflow-hidden focus-visible:outline-none', className)}
      {...props}
    >
      <div className="pb-4 text-body leading-relaxed text-text-muted">{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionPrimitive.Root, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
