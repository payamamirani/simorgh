import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'چک‌باکس — منطق و کیبورد از Radix. حالت سوم (indeterminate) برای «انتخاب بخشی از آیتم‌ها» پشتیبانی می‌شود.',
      },
    },
  },
  argTypes: {
    checked: { control: 'select', options: [true, false, 'indeterminate'] },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: 'دریافت خبرنامه', defaultChecked: true },
};

export const WithDescription: Story = {
  name: 'با توضیح',
  args: {
    label: 'ذخیره‌ی اطلاعات پرداخت',
    description: 'برای خرید بعدی نگه داشته می‌شود — قابل حذف از تنظیمات.',
  },
};

export const States: Story = {
  name: 'همه‌ی حالت‌ها',
  render: () => (
    <Stack gap="4" className="w-96">
      <Checkbox label="غیرانتخاب" />
      <Checkbox label="انتخاب‌شده" defaultChecked />
      <Checkbox label="نیمه‌انتخاب (indeterminate)" checked="indeterminate" />
      <Checkbox label="خطا" invalid defaultChecked />
      <Checkbox label="غیرفعال" disabled />
      <Checkbox label="غیرفعال انتخاب‌شده" disabled defaultChecked />
    </Stack>
  ),
};

export const ListExample: Story = {
  name: 'نمونه‌ی فهرست وظایف',
  render: () => (
    <Stack as="ul" gap="3" className="w-96 list-none">
      <li>
        <Checkbox label="راه‌اندازی ریپو" defaultChecked description="انجام شد در کامیت اول" />
      </li>
      <li>
        <Checkbox label="انتخاب پالت رنگ" defaultChecked description="فیروزه‌ای ملایم + گرم" />
      </li>
      <li>
        <Checkbox label="انتشار به npm" description="منتظر تغییرات" />
      </li>
    </Stack>
  ),
};
