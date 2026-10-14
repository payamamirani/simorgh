import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'article' | 'li';
}

export interface CardPartProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * کارت — سطحِ بالا برای گروه‌بندی محتوا.
 * ساختار ترکیبی: Card.Header / Card.Body / Card.Footer
 */
const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ as = 'section', className, ...props }, ref) => {
    const Comp = as as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn('rounded-lg border border-border bg-surface-raised shadow-sm', className)}
        {...props}
      />
    );
  },
);
CardRoot.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardPartProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between gap-4 border-b border-border px-6 py-4', className)}
    {...props}
  />
));
CardHeader.displayName = 'Card.Header';

const CardBody = forwardRef<HTMLDivElement, CardPartProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6', className)} {...props} />
));
CardBody.displayName = 'Card.Body';

const CardFooter = forwardRef<HTMLDivElement, CardPartProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-3 border-t border-border px-6 py-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
