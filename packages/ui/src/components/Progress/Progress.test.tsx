import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './Progress';

describe('Progress', () => {
  it('مقدار را با width اعمال می‌کند (RTL سازگار)', () => {
    const { container } = render(<Progress value={40} />);
    const indicator = container.querySelector('[role="progressbar"] > div') as HTMLElement;
    expect(indicator.style.width).toBe('40%');
  });

  it('role progressbar و مقدار aria دارد', () => {
    render(<Progress value={70} aria-label="آپلود" />);
    const bar = document.querySelector('[role="progressbar"]');
    expect(bar).toHaveAttribute('aria-valuenow', '70');
  });

  it('مقادیر خارج از بازه محدود می‌شوند', () => {
    const { container } = render(<Progress value={150} />);
    const indicator = container.querySelector('[role="progressbar"] > div') as HTMLElement;
    expect(indicator.style.width).toBe('100%');
  });
});
