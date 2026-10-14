import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('رندر می‌شود و متن فرزند را نشان می‌دهد', () => {
    render(<Button>ذخیره</Button>);
    expect(screen.getByRole('button', { name: 'ذخیره' })).toBeInTheDocument();
  });

  it('کلیک را گزارش می‌کند', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>کلیک</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('در حالت disabled کلیک نمی‌شود', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button disabled onClick={onClick}>
        غیرفعال
      </Button>,
    );
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('در حالت loading دارای aria-busy است و کلیک نمی‌شود', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button loading onClick={onClick}>
        در حال ذخیره
      </Button>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('type پیش‌فرض برابر button است (نه submit)', () => {
    render(<Button>چک</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('asChild استایل‌ها را روی المان فرزند اعمال می‌کند', () => {
    render(
      <Button asChild>
        <a href="#test">لینک</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'لینک' });
    expect(link).toHaveClass('rounded-md');
  });
});
