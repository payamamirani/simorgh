import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('رندر می‌شود و placeholder را نشان می‌دهد', () => {
    render(<Input placeholder="نام خود را وارد کنید" />);
    expect(screen.getByPlaceholderText('نام خود را وارد کنید')).toBeInTheDocument();
  });

  it('تایپ کردن مقدار را تغییر می‌دهد و onChange صدا زده می‌شود', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'سلام');
    expect(input).toHaveValue('سلام');
    expect(onChange).toHaveBeenCalled();
  });

  it('در حالت invalid دارای aria-invalid است', () => {
    render(<Input invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('invalid=false مقدار aria-invalid تنظیم نمی‌کند', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('در حالت disabled تایپ ممکن نیست', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input disabled onChange={onChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'تست');
    expect(input).toHaveValue('');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('prop های native مثل type و id پاس می‌شوند', () => {
    render(<Input type="password" id="pw" />);
    const input = document.getElementById('pw') as HTMLInputElement;
    expect(input.type).toBe('password');
  });

  it('forwardRef کار می‌کند', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('اندازه‌ی md کلاس h-10 می‌گیرد', () => {
    render(<Input size="md" />);
    expect(screen.getByRole('textbox')).toHaveClass('h-10');
  });
});
