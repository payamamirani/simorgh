import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'دکمه — رایج‌ترین اکشن رابط کاربری. از منوی بالا جهت (RTL/LTR) و تم (روشن/تیره) را عوض کنید.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'ذخیره تغییرات' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'انصراف' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'بیشتر بدانید' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">کوچک</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">بزرگ</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: 'غیرفعال', disabled: true },
};

export const Loading: Story = {
  args: { children: 'در حال ذخیره…', loading: true },
};

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="secondary">
      <a href="https://example.com" target="_blank" rel="noreferrer">
        دکمه‌ی لینک‌دار
      </a>
    </Button>
  ),
};
