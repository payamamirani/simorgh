import { forwardRef, type ImgHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../utils/cn';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends Omit<AvatarPrimitive.AvatarImageProps, 'children'> {
  /** اندازه */
  size?: AvatarSize;
  /** جایگزین متنی (حروف اول نام) اگر تصویر لود نشد */
  fallback: React.ReactNode;
  /** آدرس تصویر */
  src?: string;
  /** متن جایگزین تصویر */
  alt?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: 'size-8 text-caption',
  md: 'size-10 text-body',
  lg: 'size-12 text-h2',
};

/** آواتار — تصویر با جایگزین حروف اول نام */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = 'md', src, alt, fallback, className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full',
        'bg-primary-subtle text-primary',
        sizes[size],
        className,
      )}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt ?? ''}
          className="size-full object-cover"
          {...props}
        />
      )}
      <AvatarPrimitive.Fallback
        // بدون تصویر: undefined → رندر فوری همگام | با تصویر: صبر کوتاه برای جلوگیری از فلش
        delayMs={src ? 300 : undefined}
        className="flex size-full items-center justify-center font-medium"
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  ),
);

Avatar.displayName = 'Avatar';
