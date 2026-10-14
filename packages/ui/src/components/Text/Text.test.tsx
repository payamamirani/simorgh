import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('به‌صورت پیش‌فرض p رندر می‌شود', () => {
    render(<Text>سلام</Text>);
    expect(screen.getByText('سلام').tagName).toBe('P');
  });

  it('با as="span" عنصر span می‌شود', () => {
    render(<Text as="span">متن</Text>);
    expect(screen.getByText('متن').tagName).toBe('SPAN');
  });

  it('tone=muted کلاس رنگ کم‌رنگ می‌گیرد', () => {
    render(<Text tone="muted">متن</Text>);
    expect(screen.getByText('متن')).toHaveClass('text-text-muted');
  });

  it('size=caption کلاس اندازه می‌گیرد', () => {
    render(<Text size="caption">متن</Text>);
    expect(screen.getByText('متن')).toHaveClass('text-caption');
  });

  it('weight=bold کلاس وزن می‌گیرد', () => {
    render(<Text weight="bold">متن</Text>);
    expect(screen.getByText('متن')).toHaveClass('font-bold');
  });
});
