import { forwardRef, type HTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../utils/cn';
import { XIcon } from '../Icon/icons';

/**
 * Modal — با Radix Dialog:
 * مدیریت فوکس، بستن با Escape و کلیک روی پس‌زمینه، قفل اسکرول و aria کامل.
 *
 * ساختار ترکیبی:
 * <Modal> <Modal.Trigger/> <Modal.Content> <Modal.Header> <Modal.Title/> </Modal.Header> ... </Modal.Content> </Modal>
 */

export type ModalProps = DialogPrimitive.DialogProps;
export type ModalTriggerProps = DialogPrimitive.DialogTriggerProps;
export type ModalCloseProps = DialogPrimitive.DialogCloseProps;

export interface ModalContentProps extends DialogPrimitive.DialogContentProps {}

export interface ModalPartProps extends HTMLAttributes<HTMLDivElement> {}

const ModalTrigger = DialogPrimitive.Trigger;
const ModalClose = DialogPrimitive.Close;

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-40 bg-overlay',
          'motion-reduce:transition-none',
        )}
      />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2',
          'overflow-y-auto rounded-lg border border-border bg-surface-raised p-6 shadow-lg',
          'focus:outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="بستن"
          className={cn(
            'absolute end-4 top-4 inline-flex size-8 items-center justify-center rounded-md',
            'text-text-muted transition-colors motion-reduce:transition-none',
            'hover:bg-surface-sunken hover:text-text',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
          )}
        >
          <XIcon size="sm" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);
ModalContent.displayName = 'Modal.Content';

const ModalHeader = forwardRef<HTMLDivElement, ModalPartProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4 flex flex-col gap-1 pe-10', className)} {...props} />
  ),
);
ModalHeader.displayName = 'Modal.Header';

const ModalTitle = forwardRef<HTMLHeadingElement, DialogPrimitive.DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-h2 font-bold leading-tight text-text', className)}
      {...props}
    />
  ),
);
ModalTitle.displayName = 'Modal.Title';

const ModalDescription = forwardRef<
  HTMLParagraphElement,
  DialogPrimitive.DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-body leading-relaxed text-text-muted', className)}
    {...props}
  />
));
ModalDescription.displayName = 'Modal.Description';

const ModalFooter = forwardRef<HTMLDivElement, ModalPartProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-6 flex items-center justify-end gap-3', className)}
      {...props}
    />
  ),
);
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(DialogPrimitive.Root, {
  Trigger: ModalTrigger,
  Close: ModalClose,
  Content: ModalContent,
  Header: ModalHeader,
  Title: ModalTitle,
  Description: ModalDescription,
  Footer: ModalFooter,
});
