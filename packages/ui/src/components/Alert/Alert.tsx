import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckIcon,
  InfoIcon,
} from '../Icon/icons';

export type AlertTone = 'success' | 'warning' | 'danger' | 'info';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: AlertTone;
  /** تیتر کوتاه */
  title?: ReactNode;
  /** متن توضیح — children */
  children?: ReactNode;
  /** آیکون سفارشی — پیش‌فرض بر اساس tone */
  icon?: ReactNode;
}

const tones: Record<AlertTone, string> = {
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  danger: 'bg-danger/10',
  info: 'bg-info/10',
};

const iconTones: Record<AlertTone, string> = {
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
  info: 'text-info',
};

const defaultIcons: Record<AlertTone, ReactNode> = {
  success: <CheckIcon />,
  warning: <AlertTriangleIcon />,
  danger: <AlertCircleIcon />,
  info: <InfoIcon />,
};

/** نقش معنایی: خطا/هشدار فوری است (alert) — بقیه وضعیت عادی (status) */
const roles: Record<AlertTone, string> = {
  success: 'status',
  warning: 'status',
  danger: 'alert',
  info: 'status',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ tone = 'info', title, icon, className, children, ...props }, ref) => (
    <div
      ref={ref}
      role={roles[tone]}
      className={cn('flex w-full items-start gap-3 rounded-md p-4', tones[tone], className)}
      {...props}
    >
      <span className={cn('mt-0.5 shrink-0', iconTones[tone])}>{icon ?? defaultIcons[tone]}</span>
      <div className="flex flex-col gap-0.5">
        {title && <span className="text-body font-medium text-text">{title}</span>}
        {children && (
          <div className="text-body leading-relaxed text-text">{children}</div>
        )}
      </div>
    </div>
  ),
);

Alert.displayName = 'Alert';
