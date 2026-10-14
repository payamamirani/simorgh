import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('به‌صورت پیش‌فرض h2 رندر می‌شود', () => {
    render(<Heading>تیتر</Heading>);
    expect(screen.getByRole('heading', { level: 2, name: 'تیتر' })).toBeInTheDocument();
  });

  it('سطح معنایی و اندازه بصری مستقل کار می‌کنند', () => {
    render(
      <Heading as="h3" size="display">
        تیتر
      </Heading>,
    );
    const heading = screen.getByRole('heading', { level: 3, name: 'تیتر' });
    expect(heading).toHaveClass('text-display');
    expect(heading).not.toHaveClass('text-h2');
  });

  it('tone=primary کلاس رنگ می‌گیرد', () => {
    render(<Heading tone="primary">تیتر</Heading>);
    expect(screen.getByRole('heading', { name: 'تیتر' })).toHaveClass('text-primary');
  });
});
