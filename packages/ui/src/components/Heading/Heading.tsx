import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'display' | 'h1' | 'h2';
export type HeadingTone = 'default' | 'muted' | 'primary';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** سطح معنایی تیتر (برای سئو و ساختار صفحه) — مستقل از اندازه‌ی ظاهری */
  as?: HeadingLevel;
  /** اندازه‌ی ظاهری — مستقل از سطح معنایی */
  size?: HeadingSize;
  weight?: 'medium' | 'bold';
  tone?: HeadingTone;
}

const sizes: Record<HeadingSize, string> = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
};

const tones: Record<HeadingTone, string> = {
  default: 'text-text',
  muted: 'text-text-muted',
  primary: 'text-primary',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', size = 'h2', weight = 'bold', tone = 'default', className, ...props }, ref) => {
    const Comp = as as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(sizes[size], weight === 'bold' ? 'font-bold' : 'font-medium', 'leading-tight', 'text-balance', tones[tone], className)}
        {...props}
      />
    );
  },
);

Heading.displayName = 'Heading';
