import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toaster, toast } from './Toast';

describe('Toast', () => {
  it('toast() پیام را نشان می‌دهد', async () => {
    render(<Toaster />);
    await act(async () => {
      toast({ title: 'ذخیره شد', tone: 'success' });
    });
    expect(await screen.findByText('ذخیره شد')).toBeInTheDocument();
  });

  it('خطا نقش alert دارد', async () => {
    render(<Toaster />);
    await act(async () => {
      toast({ title: 'پرداخت ناموفق', tone: 'error' });
    });
    expect(await screen.findByRole('alert')).toHaveTextContent('پرداخت ناموفق');
  });

  it('با دکمه بستن، بسته می‌شود', async () => {
    const user = userEvent.setup();
    render(<Toaster />);
    await act(async () => {
      toast({ title: 'پیام', tone: 'info' });
    });
    await user.click(await screen.findByRole('button', { name: 'بستن' }));
    expect(screen.queryByText('پیام')).not.toBeInTheDocument();
  });

  it('بعد از duration خودش بسته می‌شود', async () => {
    vi.useFakeTimers();
    render(<Toaster />);
    act(() => {
      toast({ title: 'موقت', tone: 'info', duration: 100 });
    });
    expect(screen.getByText('موقت')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(screen.queryByText('موقت')).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});
