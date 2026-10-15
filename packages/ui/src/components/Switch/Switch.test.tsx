import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('با کلیک تغییر وضعیت می‌دهد و onCheckedChange صدا زده می‌شود', async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch aria-label="حالت تاریک" defaultChecked onCheckedChange={onCheckedChange} />);
    const control = screen.getByRole('switch', { name: 'حالت تاریک' });
    expect(control).toHaveAttribute('data-state', 'checked');
    await user.click(control);
    expect(control).toHaveAttribute('data-state', 'unchecked');
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('کلیک روی لیبل هم تغییر می‌دهد', async () => {
    const user = userEvent.setup();
    render(<Switch label="اعلان‌ها" id="notify" />);
    await user.click(screen.getByText('اعلان‌ها'));
    expect(screen.getByRole('switch', { name: 'اعلان‌ها' })).toHaveAttribute(
      'data-state',
      'checked',
    );
  });

  it('invalid → aria-invalid', () => {
    render(<Switch invalid aria-label="تنظیم" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });
});
