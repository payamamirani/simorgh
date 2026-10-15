import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

const options = (
  <>
    <option value="tehran">تهران</option>
    <option value="shiraz">شیراز</option>
  </>
);

describe('Select', () => {
  it('گزینه‌ها را رندر می‌کند', () => {
    render(<Select>{options}</Select>);
    expect(screen.getByRole('option', { name: 'تهران' })).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('انتخاب گزینه onChange را صدا می‌زند', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Select onChange={onChange}>
        <option value="">انتخاب کنید</option>
        {options}
      </Select>,
    );
    await user.selectOptions(screen.getByRole('combobox'), 'shiraz');
    expect(screen.getByRole('combobox')).toHaveValue('shiraz');
    expect(onChange).toHaveBeenCalled();
  });

  it('placeholder به‌صورت گزینه‌ی غیرقابل‌انتخاب اول می‌آید', () => {
    render(
      <Select placeholder="انتخاب کنید">{options}</Select>,
    );
    const first = screen.getAllByRole('option')[0] as HTMLOptionElement;
    expect(first.textContent).toBe('انتخاب کنید');
    expect(first.disabled).toBe(true);
  });

  it('invalid → aria-invalid', () => {
    render(<Select invalid>{options}</Select>);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });
});
