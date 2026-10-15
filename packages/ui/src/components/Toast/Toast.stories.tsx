import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from './Toast';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';

const meta = {
  title: 'Feedback/Toast',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'پیام گذرا — بعد از عملیات (ذخیره، حذف، خطا). یک‌بار <Toaster /> را در ریشه بگذارید و از هر جا `toast({...})` صدا بزنید. با سوایپ به چپ (منطق RTL) بسته می‌شود.',
      },
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <Stack direction="row" gap="3">
      <Button
        onClick={() => toast({ title: 'ذخیره شد', tone: 'success', description: 'تغییرات شما اعمال شد.' })}
      >
        موفقیت
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: 'پرداخت ناموفق', tone: 'error', description: 'اتصال به درگاه برقرار نشد.' })}
      >
        خطا
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: 'سقف مصرف', tone: 'warning' })}
      >
        هشدار
      </Button>
      <Button
        variant="ghost"
        onClick={() => toast({ title: 'نسخه‌ی جدید', tone: 'info', description: 'صفحه را رفرش کنید.' })}
      >
        اطلاعات
      </Button>
      <Toaster />
    </Stack>
  ),
};

export const LongDuration: Story = {
  name: 'ماندگار طولانی',
  render: () => (
    <Stack direction="row" gap="3">
      <Button
        onClick={() =>
          toast({
            title: 'در حال آپلود ۳ فایل…',
            description: 'این پیام تا ۳۰ ثانیه می‌ماند.',
            tone: 'info',
            duration: 30000,
          })
        }
      >
        آپلود
      </Button>
      <Toaster />
    </Stack>
  ),
};
