import { forwardRef, type SVGProps } from 'react';
import { cn } from '../../utils/cn';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends SVGProps<SVGSVGElement> {
  size?: SpinnerSize;
  /** متن قابل‌دسترس — نقش status می‌دهد تا صفحه‌خوان اعلام کند */
  label?: string;
}

const sizes: Record<SpinnerSize, string> = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
};

/** نشانگر بارگذاری — با کاهش حرکت، انیمیشن متوقف می‌شود */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 'md', label, className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={label ? undefined : true}
      role={label ? 'status' : undefined}
      aria-label={label}
      className={cn('shrink-0 motion-safe:animate-spin', sizes[size], className)}
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
        fill="currentColor"
        className="opacity-75"
      />
    </svg>
  ),
);

Spinner.displayName = 'Spinner';
