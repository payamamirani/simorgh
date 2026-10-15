import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('رندر می‌شود و با کلیک تغییر وضعیت می‌دهد', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox label="گزینه" onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole('checkbox', { name: 'گزینه' });
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('کلیک روی لیبل هم چک‌باکس را تغییر می‌دهد', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="خبرنامه" />);
    await user.click(screen.getByText('خبرنامه'));
    expect(screen.getByRole('checkbox', { name: 'خبرنامه' })).toHaveAttribute(
      'data-state',
      'checked',
    );
  });

  it('حالت indeterminate پشتیبانی می‌شود', () => {
    render(<Checkbox label="نیمه" checked="indeterminate" />);
    expect(screen.getByRole('checkbox', { name: 'نیمه' })).toHaveAttribute(
      'data-state',
      'indeterminate',
    );
  });

  it('disabled → کلیک بی‌اثر', async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="قفل" disabled onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole('checkbox', { name: 'قفل' }));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('بدون label فقط دکمه رندر می‌شود (برای جدول‌ها)', () => {
    render(<Checkbox aria-label="انتخاب ردیف" />);
    expect(screen.getByRole('checkbox', { name: 'انتخاب ردیف' })).toBeInTheDocument();
  });
});
