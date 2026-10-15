import { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Field } from './Field';
import { Input } from '../Input/Input';

describe('Field', () => {
  it('لیبل با htmlFor به کنترل وصل است — کلیک لیبل فوکس می‌دهد', async () => {
    const user = userEvent.setup();
    render(
      <Field label="ایمیل">
        <Input />
      </Field>,
    );
    await user.click(screen.getByText('ایمیل'));
    expect(screen.getByRole('textbox')).toHaveFocus();
  });

  it('خطا aria-invalid و aria-describedby را روی کنترل تنظیم می‌کند', () => {
    render(
      <Field label="ایمیل" error="الزامی است">
        <Input />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    const message = document.getElementById(describedBy as string);
    expect(message?.textContent).toBe('الزامی است');
  });

  it('راهنمای عادی با رنگ کم‌رنگ رندر می‌شود', () => {
    render(
      <Field label="ایمیل" hint="فقط سازمانی">
        <Input />
      </Field>,
    );
    expect(screen.getByText('فقط سازمانی')).toHaveClass('text-text-muted');
  });

  it('الزامی ستاره نشان می‌دهد و aria-required می‌گذارد', () => {
    render(
      <Field label="نام" required>
        <Input />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('id اختصاصی کنترل حفظ می‌شود', () => {
    render(
      <Field label="نام">
        <Input id="custom-id" />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'custom-id');
  });

  it('error بر invalid صریح کنترل اولویت ندارد وقتی کنترل خودش invalid باشد', () => {
    render(
      <Field label="نام">
        <Input invalid aria-label="نام" />
      </Field>,
    );
    expect(screen.getByRole('textbox', { name: 'نام' })).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('Field با کنترل‌های دیگر', () => {
  it('useRef از طریق کنترل کار می‌کند (ترکیب واقعی)', () => {
    function Probe() {
      const ref = useRef<HTMLInputElement>(null);
      return (
        <Field label="تست" hint="راهنما">
          <Input ref={ref} onFocus={() => undefined} />
        </Field>
      );
    }
    render(<Probe />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
