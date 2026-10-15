import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'هشدار درون‌صفحه‌ای — پیام ماندگار مرتبط با محتوای صفحه (برخلاف Toast که گذرا است). خطا نقش alert (فوری) دارد و بقیه status.',
      },
    },
  },
  argTypes: {
    tone: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    tone: 'info',
    title: 'نسخه‌ی جدید در دسترس است',
    children: 'برای به‌روزرسانی، صفحه را دوباره بارگذاری کنید.',
    className: 'w-96',
  },
};

export const AllTones: Story = {
  name: 'همه‌ی حالت‌ها',
  render: () => (
    <Stack gap="4" className="w-[28rem]">
      <Alert tone="success" title="پرداخت موفق">
        رسید شما به ایمیل ارسال شد. شماره‌ی پیگیری: ۸۴۵۲
      </Alert>
      <Alert tone="warning" title="سقف مصرف نزدیک است">
        ۸۵٪ از سهمیه‌ی ماهانه استفاده کرده‌اید.
      </Alert>
      <Alert tone="error" title="پرداخت ناموفق">
        ارتباط با درگاه برقرار نشد. لطفاً دوباره تلاش کنید یا کارت دیگری را امتحان کنید.
      </Alert>
      <Alert tone="info" title="تغییر ساعت کاری پشتیبانی">
        از ابتدای هفته‌ی آینده، پشتیبانی از ساعت ۹ تا ۱۸ پاسخگوست.
      </Alert>
    </Stack>
  ),
};

export const TitleOnly: Story = {
  name: 'فقط تیتر',
  render: () => (
    <Alert tone="success" title="تغییرات ذخیره شد" className="w-96" />
  ),
};
