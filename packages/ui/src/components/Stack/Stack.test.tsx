import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('فرزندان را با فاصله‌ی توکنی رندر می‌کند', () => {
    render(
      <Stack data-testid="stack" gap="8">
        <span>یک</span>
        <span>دو</span>
      </Stack>,
    );
    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex', 'flex-col', 'gap-(--simorgh-space-8)');
    expect(screen.getByText('یک')).toBeInTheDocument();
  });

  it('direction=row کلاس افقی می‌گیرد', () => {
    render(
      <Stack data-testid="stack" direction="row">
        <span>یک</span>
      </Stack>,
    );
    expect(screen.getByTestId('stack')).toHaveClass('flex-row');
  });

  it('با as="ul" ساختار فهرست معنایی می‌شود', () => {
    render(
      <Stack as="ul">
        <li>یک</li>
      </Stack>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('align و justify اعمال می‌شوند', () => {
    render(
      <Stack data-testid="stack" align="center" justify="between">
        <span>یک</span>
      </Stack>,
    );
    expect(screen.getByTestId('stack')).toHaveClass('items-center', 'justify-between');
  });
});
