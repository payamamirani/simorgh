import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type StackGap = '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16';
export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'ul' | 'ol' | 'nav' | 'header' | 'footer' | 'main' | 'article';
  direction?: StackDirection;
  /** فاصله‌ی بین آیتم‌ها — مستقیم از توکن‌های space */
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}

/** همه‌ی فاصله‌ها مستقیم به توکن‌ها وصل‌اند: gap-(--simorgh-space-N) */
const gaps: Record<StackGap, string> = {
  '1': 'gap-(--simorgh-space-1)',
  '2': 'gap-(--simorgh-space-2)',
  '3': 'gap-(--simorgh-space-3)',
  '4': 'gap-(--simorgh-space-4)',
  '6': 'gap-(--simorgh-space-6)',
  '8': 'gap-(--simorgh-space-8)',
  '12': 'gap-(--simorgh-space-12)',
  '16': 'gap-(--simorgh-space-16)',
};

const aligns: Record<StackAlign, string> = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifies: Record<StackJustify, string> = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      as = 'div',
      direction = 'column',
      gap = '4',
      align,
      justify,
      wrap = false,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = as as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(
          'flex',
          direction === 'row' ? 'flex-row' : 'flex-col',
          gaps[gap],
          align && aligns[align],
          justify && justifies[justify],
          wrap && 'flex-wrap',
          className,
        )}
        {...props}
      />
    );
  },
);

Stack.displayName = 'Stack';
