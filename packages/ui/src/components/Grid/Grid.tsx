import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type GridGap = '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** تعداد ستون‌های هم‌عرض */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** فاصله — مستقیم از توکن‌های space */
  gap?: GridGap;
  /** فاصله‌ی بین ردیف‌ها (اگر جدا از gap لازم بود) */
  rowGap?: GridGap;
}

/** همه‌ی فاصله‌ها مستقیم به توکن‌ها وصل‌اند: gap-(--simorgh-space-N) */
const gaps: Record<GridGap, string> = {
  '1': 'gap-(--simorgh-space-1)',
  '2': 'gap-(--simorgh-space-2)',
  '3': 'gap-(--simorgh-space-3)',
  '4': 'gap-(--simorgh-space-4)',
  '6': 'gap-(--simorgh-space-6)',
  '8': 'gap-(--simorgh-space-8)',
  '12': 'gap-(--simorgh-space-12)',
  '16': 'gap-(--simorgh-space-16)',
};

const rowGaps: Record<GridGap, string> = {
  '1': 'row-gap-(--simorgh-space-1)',
  '2': 'row-gap-(--simorgh-space-2)',
  '3': 'row-gap-(--simorgh-space-3)',
  '4': 'row-gap-(--simorgh-space-4)',
  '6': 'row-gap-(--simorgh-space-6)',
  '8': 'row-gap-(--simorgh-space-8)',
  '12': 'row-gap-(--simorgh-space-12)',
  '16': 'row-gap-(--simorgh-space-16)',
};

const columns = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
} as const;

/** چیدمان دو‌بعدی — ستون‌های هم‌عرض با فاصله‌ی توکنی */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns: cols = 2, gap = '4', rowGap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid', columns[cols], gaps[gap], rowGap && rowGaps[rowGap], className)}
      {...props}
    />
  ),
);

Grid.displayName = 'Grid';
