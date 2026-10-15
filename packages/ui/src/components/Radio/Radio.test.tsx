import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Radio, RadioGroup } from './Radio';

describe('Radio', () => {
  it('گروه با آیتم‌ها رندر می‌شود', () => {
    render(
      <RadioGroup aria-label="انتخاب">
        <Radio value="a" label="گزینه الف" />
        <Radio value="b" label="گزینه ب" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup', { name: 'انتخاب' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'گزینه الف' })).toBeInTheDocument();
  });

  it('کلیک یک گزینه را انتخاب می‌کند و دیگری انتخاب نمی‌ماند', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup aria-label="انتخاب">
        <Radio value="a" label="گزینه الف" />
        <Radio value="b" label="گزینه ب" />
      </RadioGroup>,
    );
    const a = screen.getByRole('radio', { name: 'گزینه الف' });
    const b = screen.getByRole('radio', { name: 'گزینه ب' });
    await user.click(b);
    expect(b).toBeChecked();
    expect(a).not.toBeChecked();
  });

  it('invalid → aria-invalid روی گروه', () => {
    render(
      <RadioGroup invalid aria-label="انتخاب">
        <Radio value="a" label="الف" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  });

  it('disabled قابل انتخاب نیست', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup aria-label="انتخاب" defaultValue="a">
        <Radio value="a" label="الف" />
        <Radio value="b" label="ب" disabled />
      </RadioGroup>,
    );
    await user.click(screen.getByRole('radio', { name: 'ب' }));
    expect(screen.getByRole('radio', { name: 'ب' })).not.toBeChecked();
  });
});
