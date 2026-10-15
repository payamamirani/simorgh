import { forwardRef, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

/**
 * Table — جدول داده با ساختار معنایی کامل (thead/th/scope).
 *
 * <Table>
 *   <Table.Header>
 *     <Table.Row><Table.Head>ستون</Table.Head></Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row><Table.Cell>مقدار</Table.Cell></Table.Row>
 *   </Table.Body>
 * </Table>
 */

const TableRoot = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-x-auto">
      <table ref={ref} className={cn('w-full text-body', className)} {...props} />
    </div>
  ),
);
TableRoot.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b [&_tr]:border-border', className)} {...props} />
  ),
);
TableHeader.displayName = 'Table.Header';

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  ),
);
TableBody.displayName = 'Table.Body';

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border transition-colors hover:bg-border/40',
        'data-[state=selected]:bg-primary/10',
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = 'Table.Row';

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      scope="col"
      className={cn(
        'h-11 px-4 text-start align-middle text-caption font-medium text-text-muted',
        'whitespace-nowrap',
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = 'Table.Head';

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('px-4 py-3 text-start align-middle text-text', className)} {...props} />
  ),
);
TableCell.displayName = 'Table.Cell';

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
});
