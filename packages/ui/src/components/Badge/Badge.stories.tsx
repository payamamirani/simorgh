import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'نشان — برای وضعیت، دسته‌بندی یا شمارنده. دو حالت soft (ملایم، پیش‌فرض) و solid (پررنگ). رنگ متن حالت solid از توکن‌های on-* می‌آید و کنتراستش در بیلد چک می‌شود.',
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'info'],
    },
    variant: { control: 'select', options: ['soft', 'solid'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { children: 'پیش‌فرض', tone: 'primary' } };

export const AllTones: Story = {
  name: 'همه‌ی رنگ‌ها',
  render: () => (
    <Stack gap="6">
      <Stack direction="row" gap="3" align="center">
        <Text size="caption" tone="muted" className="w-12">
          soft
        </Text>
        <Badge>خنثی</Badge>
        <Badge tone="primary">اصلی</Badge>
        <Badge tone="success">موفق</Badge>
        <Badge tone="warning">هشدار</Badge>
        <Badge tone="error">خطا</Badge>
        <Badge tone="info">اطلاع</Badge>
      </Stack>
      <Stack direction="row" gap="3" align="center">
        <Text size="caption" tone="muted" className="w-12">
          solid
        </Text>
        <Badge variant="solid">خنثی</Badge>
        <Badge tone="primary" variant="solid">
          اصلی
        </Badge>
        <Badge tone="success" variant="solid">
          موفق
        </Badge>
        <Badge tone="warning" variant="solid">
          هشدار
        </Badge>
        <Badge tone="error" variant="solid">
          خطا
        </Badge>
        <Badge tone="info" variant="solid">
          اطلاع
        </Badge>
      </Stack>
    </Stack>
  ),
};

export const StatusExample: Story = {
  name: 'نمونه‌ی وضعیت سفارش',
  render: () => (
    <Stack direction="row" gap="3">
      <Badge tone="info">در حال پردازش</Badge>
      <Badge tone="warning">در انتظار پرداخت</Badge>
      <Badge tone="success">تحویل شده</Badge>
      <Badge tone="error">لغو شده</Badge>
    </Stack>
  ),
};
