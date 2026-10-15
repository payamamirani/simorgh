import { forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '../../utils/cn';

/**
 * DropdownMenu — منوی اکشن‌ها برای یک تریگر.
 *
 * <DropdownMenu>
 *   <DropdownMenu.Trigger asChild><Button>اکشن‌ها</Button></DropdownMenu.Trigger>
 *   <DropdownMenu.Content>
 *     <DropdownMenu.Label>عنوان گروه</DropdownMenu.Label>
 *     <DropdownMenu.Item>ویرایش</DropdownMenu.Item>
 *     <DropdownMenu.Separator />
 *     <DropdownMenu.Item tone="danger">حذف</DropdownMenu.Item>
 *   </DropdownMenu.Content>
 * </DropdownMenu>
 */

export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuContentProps
>(({ className, sideOffset = 6, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-44 rounded-md border border-border bg-surface-raised p-1.5 shadow-lg',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = 'DropdownMenu.Content';

export interface DropdownMenuItemProps
  extends Omit<DropdownMenuPrimitive.DropdownMenuItemProps, 'children'> {
  children?: React.ReactNode;
  /** آیتم مخرب — رنگ danger */
  tone?: 'default' | 'danger';
}

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ tone = 'default', className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2.5 py-2',
        'text-body text-text outline-none transition-colors',
        'focus-visible:outline-none data-[highlighted]:bg-border',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        tone === 'danger' && 'text-danger data-[highlighted]:bg-danger/10',
        className,
      )}
      {...props}
    />
  ),
);
DropdownMenuItem.displayName = 'DropdownMenu.Item';

const DropdownMenuLabel = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuLabelProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('px-2.5 py-1.5 text-caption text-text-muted', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = 'DropdownMenu.Label';

const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1.5 my-1.5 h-px bg-border', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

export const DropdownMenu = Object.assign(DropdownMenuPrimitive.Root, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Group: DropdownMenuGroup,
});
