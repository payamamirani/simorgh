import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('بخش‌های ترکیبی را رندر می‌کند', () => {
    render(
      <Card>
        <Card.Header>سرصفحه</Card.Header>
        <Card.Body>بدنه</Card.Body>
        <Card.Footer>پاصفحه</Card.Footer>
      </Card>,
    );
    expect(screen.getByText('سرصفحه')).toBeInTheDocument();
    expect(screen.getByText('بدنه')).toBeInTheDocument();
    expect(screen.getByText('پاصفحه')).toBeInTheDocument();
  });

  it('کلاس‌های سطح و حاشیه توکنی دارد', () => {
    render(
      <Card data-testid="card">
        <Card.Body>x</Card.Body>
      </Card>,
    );
    expect(screen.getByTestId('card')).toHaveClass(
      'rounded-lg',
      'border-border',
      'bg-surface-raised',
      'shadow-sm',
    );
  });

  it('پیش‌فرض معنایی section است و با as="article" تغییر می‌کند', () => {
    const { rerender } = render(
      <Card>
        <Card.Body>x</Card.Body>
      </Card>,
    );
    expect(document.querySelector('section')).toBeInTheDocument();

    rerender(
      <Card as="article">
        <Card.Body>x</Card.Body>
      </Card>,
    );
    expect(document.querySelector('article')).toBeInTheDocument();
  });
});
