import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('پیش‌فرض aria-hidden است', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('با label نقش status می‌گیرد', () => {
    const { container } = render(<Spinner label="در حال بارگذاری" />);
    expect(container.querySelector('svg')).toHaveAttribute('role', 'status');
  });

  it('کلاس انیمیشن motion-safe دارد', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toHaveClass('motion-safe:animate-spin');
  });
});
