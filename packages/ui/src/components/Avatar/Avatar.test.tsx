import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('جایگزین متنی را نشان می‌دهد', async () => {
    render(<Avatar fallback="س" aria-label="کاربر" />);
    expect(await screen.findByText('س')).toBeInTheDocument();
  });

  it('بدون src، تصویر رندر نمی‌شود', () => {
    const { container } = render(<Avatar fallback="س" />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('با src، تا لود شدن تصویر جایگزین نشان داده می‌شود', async () => {
    // در jsdom تصویر واقعی لود نمی‌شود — رفتار درست، نمایش جایگزین است
    render(<Avatar src="/test.png" alt="تصویر کاربر" fallback="س" />);
    expect(await screen.findByText('س')).toBeInTheDocument();
  });
});
