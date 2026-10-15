import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../utils/cn';

/**
 * Tabs — با Radix Tabs: ناوبری کیبورد (فلش‌ها)، aria کامل.
 *
 * <Tabs defaultValue="a">
 *   <Tabs.List>
 *     <Tabs.Trigger value="a">اول</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="a">...</Tabs.Content>
 * </Tabs>
 */

export type TabsProps = TabsPrimitive.TabsProps;

const TabsList = forwardRef<HTMLDivElement, TabsPrimitive.TabsListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex w-full items-center gap-1 border-b border-border',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  ),
);
TabsList.displayName = 'Tabs.List';

const TabsTrigger = forwardRef<HTMLButtonElement, TabsPrimitive.TabsTriggerProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        '-mb-px inline-flex h-10 items-center gap-2 border-b-2 border-transparent px-4',
        'text-body font-medium text-text-muted transition-colors motion-reduce:transition-none',
        'hover:text-text',
        'data-[state=active]:border-primary data-[state=active]:text-text',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
        className,
      )}
      {...props}
    />
  ),
);
TabsTrigger.displayName = 'Tabs.Trigger';

const TabsContent = forwardRef<HTMLDivElement, TabsPrimitive.TabsContentProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn('pt-4 focus-visible:outline-none', className)}
      {...props}
    />
  ),
);
TabsContent.displayName = 'Tabs.Content';

export const Tabs = Object.assign(TabsPrimitive.Root, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
