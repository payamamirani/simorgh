import type { Preview } from '@storybook/react';
import '../src/index.css';

/**
 * تنظیمات سراسری Storybook سیمرغ:
 * - پیش‌فرض: راست‌به‌چپ + فارسی + تم روشن
 * - از نوار بالای ابزار قابل تغییرند (تم، جهت)
 *
 * نکته: پس‌زمینه‌ی بوم از طریق backgrounds خود Storybook ست می‌شود
 * (در SB 9+ این قابلیت هسته است و با inline style روی بوم اعمال می‌شود).
 * مقدار آن var(--simorgh-color-background) است تا خودکار با تم فعال عوض شود.
 */
const preview: Preview = {
  initialGlobals: {
    theme: 'light',
    dir: 'rtl',
  },
  globalTypes: {
    theme: {
      description: 'تم رنگی — پس‌زمینه‌ی بوم هم دنبال می‌کند',
      toolbar: {
        title: 'تم',
        items: [
          { value: 'light', title: 'روشن', icon: 'sun' },
          { value: 'dark', title: 'تیره', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    dir: {
      description: 'جهت متن',
      toolbar: {
        title: 'جهت',
        items: [
          { value: 'rtl', title: 'راست‌به‌چپ (فارسی)' },
          { value: 'ltr', title: 'چپ‌به‌راست' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    // پس‌زمینه‌ی بوم — مقدار متغیری که با data-theme روی <html> عوض می‌شود
    backgrounds: {
      default: 'سیمرغ',
      values: [
        { name: 'سیمرغ', value: 'var(--simorgh-color-background)' },
      ],
      grid: { disable: true },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme, dir } = context.globals;
      const root = document.documentElement;
      root.setAttribute('data-theme', theme ?? 'light');
      root.setAttribute('dir', dir ?? 'rtl');
      root.setAttribute('lang', dir === 'ltr' ? 'en' : 'fa');
      // اسکرول‌بار و کنترل‌های بومی مرورگر هم با تم هماهنگ شوند
      root.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
      // متن بوم از توکن تم فعال (پس‌زمینه را backgrounds مدیریت می‌کند)
      document.body.style.color = 'var(--simorgh-color-text-primary)';
      return <Story />;
    },
  ],
};

export default preview;
