import type { IconProps } from './Icon';
import { Icon } from './Icon';

/**
 * آیکون‌های شروع سیمرغ — خطی، stroke یکنواخت، مبتنی بر currentColor.
 * مجموعه‌ی کامل در آینده در پکیج @simorgh/icons.
 */

export const CheckIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="m5 13 4 4L19 7" />
  </Icon>
);

export const XIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Icon>
);

export const ChevronDownIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const PlusIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);
