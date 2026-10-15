import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('تیتر و متن را رندر می‌کند', () => {
    render(
      <Alert tone="success" title="موفق">
        ذخیره شد
      </Alert>,
    );
    expect(screen.getByText('موفق')).toBeInTheDocument();
    expect(screen.getByText('ذخیره شد')).toBeInTheDocument();
  });

  it('خطا نقش alert دارد (اعلان فوری برای صفحه‌خوان)', () => {
    render(<Alert tone="error" title="خطا" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('اطلاعات نقش status دارد', () => {
    render(<Alert tone="info" title="خبر" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('هر tone کلاس پس‌زمینه‌ی خودش را می‌گیرد', () => {
    const { rerender } = render(<Alert tone="warning" title="هشدار" />);
    expect(screen.getByRole('status')).toHaveClass('bg-warning-subtle');
    rerender(<Alert tone="error" title="خطا" />);
    expect(screen.getByRole('alert')).toHaveClass('bg-error-subtle');
  });

  it('فقط تیتر بدون children کار می‌کند', () => {
    render(<Alert tone="info" title="فقط تیتر" />);
    expect(screen.getByText('فقط تیتر')).toBeInTheDocument();
  });
});
