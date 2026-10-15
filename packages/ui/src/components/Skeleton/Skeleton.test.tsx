import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';
import { Separator } from '../Separator/Separator';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Kbd } from '../Kbd/Kbd';
import { Code } from '../Code/Code';

describe('بدوی‌ها (Skeleton/Separator/…)', () => {
  it('Skeleton پالس دارد و aria-hidden است', () => {
    const { container } = render(<Skeleton className="h-4 w-10" />);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('animate-pulse');
    expect(el).toHaveAttribute('aria-hidden', 'true');
  });

  it('Skeleton انیمیشن با motion-reduce خاموش می‌شود', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstElementChild).toHaveClass('motion-reduce:animate-none');
  });

  it('Separator افقی و عمودی کلاس درست دارند', () => {
    const { container, rerender } = render(<Separator />);
    expect(container.firstElementChild).toHaveClass('h-px', 'w-full');
    rerender(<Separator orientation="vertical" />);
    expect(container.firstElementChild).toHaveClass('w-px', 'h-full');
  });

  it('VisuallyHidden کلاس sr-only دارد', () => {
    render(<VisuallyHidden>متن</VisuallyHidden>);
    expect(screen_get()).toHaveClass('sr-only');
    function screen_get() {
      return document.querySelector('.sr-only') as HTMLElement;
    }
  });

  it('Kbd عنصر kbd با dir لاتین است', () => {
    render(<Kbd>Ctrl</Kbd>);
    const el = document.querySelector('kbd') as HTMLElement;
    expect(el).toHaveAttribute('dir', 'ltr');
    expect(el).toHaveTextContent('Ctrl');
  });

  it('Code عنصر code رندر می‌کند', () => {
    render(<Code>npm test</Code>);
    expect(document.querySelector('code')).toHaveTextContent('npm test');
  });
});
