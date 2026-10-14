import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './Icon';
import { CheckIcon, PlusIcon } from './icons';

describe('Icon', () => {
  it('پیش‌فرض aria-hidden است (تزئینی)', () => {
    render(<CheckIcon />);
    const svg = document.querySelector('svg') as SVGSVGElement;
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('با label نقش img و aria-label می‌گیرد', () => {
    render(<PlusIcon label="افزودن" />);
    const svg = document.querySelector('svg') as SVGSVGElement;
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('aria-label', 'افزودن');
    expect(svg).not.toHaveAttribute('aria-hidden');
  });

  it('اندازه‌ها کلاس مناسب می‌گیرند', () => {
    const { container } = render(<Icon size="lg" />);
    expect(container.querySelector('svg')).toHaveClass('size-6');
  });

  it('آیکون‌ها مسیر دارند و stroke از currentColor می‌آید', () => {
    render(<CheckIcon />);
    const svg = document.querySelector('svg') as SVGSVGElement;
    expect(svg.getAttribute('stroke')).toBe('currentColor');
    expect(svg.querySelector('path')).toBeInTheDocument();
  });
});
