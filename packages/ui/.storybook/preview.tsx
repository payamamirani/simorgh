import type { Preview } from '@storybook/react';
import '../src/index.css';

/**
 * تنظیمات سراسری Storybook سیمرغ:
 * - پیش‌فرض: راست‌به‌چپ + فارسی + تم روشن
 * - از نوار بالای ابزار قابل تغییرند (تم، جهت)
 */
const preview: Preview = {
  initialGlobals: {
    theme: 'light',
    dir: 'rtl',
  },
  globalTypes: {
    theme: {
      description: 'تم رنگی',
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
  decorators: [
    (Story, context) => {
      const { theme, dir } = context.globals;
      const root = document.documentElement;
      root.setAttribute('data-theme', theme ?? 'light');
      root.setAttribute('dir', dir ?? 'rtl');
      root.setAttribute('lang', dir === 'ltr' ? 'en' : 'fa');
      return <Story />;
    },
  ],
};

export default preview;
