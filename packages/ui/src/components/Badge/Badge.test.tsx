import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('رندر می‌شود و فرم قرصی دارد', () => {
    render(<Badge>نشان</Badge>);
    expect(screen.getByText('نشان')).toHaveClass('rounded-full', 'text-caption');
  });

  it('حالت soft رنگ ملایم می‌گیرد', () => {
    render(<Badge tone="success">موفق</Badge>);
    expect(screen.getByText('موفق')).toHaveClass('bg-success-subtle', 'text-success');
  });

  it('حالت solid رنگ متن on-* می‌گیرد (کنتراست توکنی)', () => {
    render(
      <Badge tone="error" variant="solid">
        خطا
      </Badge>,
    );
    expect(screen.getByText('خطا')).toHaveClass('bg-error', 'text-on-error');
  });

  it('به‌صورت span رندر می‌شود', () => {
    render(<Badge>x</Badge>);
    expect(screen.getByText('x').tagName).toBe('SPAN');
  });
});
