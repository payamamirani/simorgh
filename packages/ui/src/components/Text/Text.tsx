import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type TextTone = 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TextWeight = 'regular' | 'medium' | 'bold';
export type TextLeading = 'normal' | 'tight' | 'relaxed';
export type TextSize = 'body' | 'caption';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** تگ HTML — معنا را عوض نمی‌کند، فقط ظاهر متن است (p، span، strong، ...) */
  as?: 'p' | 'span' | 'div' | 'strong' | 'em' | 'small' | 'label';
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
  /** ارتفاع خط — برای فارسی relaxed توصیه می‌شود */
  leading?: TextLeading;
}

const tones: Record<TextTone, string> = {
  default: 'text-text',
  muted: 'text-text-muted',
  primary: 'text-primary',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
};

const weights: Record<TextWeight, string> = {
  regular: 'font-regular',
  medium: 'font-medium',
  bold: 'font-bold',
};

const leadings: Record<TextLeading, string> = {
  normal: 'leading-normal',
  tight: 'leading-tight',
  relaxed: 'leading-relaxed',
};

const sizes: Record<TextSize, string> = {
  body: 'text-body',
  caption: 'text-caption',
};

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    { as = 'p', size = 'body', weight = 'regular', tone = 'default', leading = 'normal', className, ...props },
    ref,
  ) => {
    const Comp = as as ElementType;
    return (
      <Comp
        ref={ref}
        className={cn(sizes[size], weights[weight], leadings[leading], tones[tone], className)}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';
