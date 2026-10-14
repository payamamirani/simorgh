import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'متن — برای پاراگراف، توضیحات و برچسب‌ها. اندازه، وزن، رنگ و ارتفاع خط همه از توکن‌ها می‌آیند. برای فارسی leading="relaxed" توصیه می‌شود.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['body', 'caption'] },
    weight: { control: 'select', options: ['regular', 'medium', 'bold'] },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    leading: { control: 'select', options: ['normal', 'tight', 'relaxed'] },
    as: { control: 'select', options: ['p', 'span', 'div', 'strong', 'small', 'label'] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children:
      'مثل سیمرغ که از پرهای بسیاری شکل می‌گیرد، این سیستم از قطعات کوچک و منظم، تجربه‌ای یکپارچه می‌سازد.',
  },
};

export const Tones: Story = {
  name: 'رنگ‌ها',
  render: () => (
    <div className="flex w-96 flex-col gap-2">
      <Text>متن پیش‌فرض</Text>
      <Text tone="muted">متن کم‌رنگ (ثانویه)</Text>
      <Text tone="primary">متن فیروزه‌ای</Text>
      <Text tone="success">پیام موفقیت</Text>
      <Text tone="warning">پیام هشدار</Text>
      <Text tone="danger">پیام خطا</Text>
      <Text tone="info">پیام اطلاع‌رسانی</Text>
    </div>
  ),
};

export const SizesAndWeights: Story = {
  name: 'اندازه‌ها و وزن‌ها',
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Text size="body">متن اصلی — وزن معمولی</Text>
      <Text size="body" weight="medium">
        متن اصلی — وزن متوسط
      </Text>
      <Text size="body" weight="bold">
        متن اصلی — وزن ضخیم
      </Text>
      <Text size="caption">توضیحات کمکی — caption</Text>
    </div>
  ),
};

export const PersianLeading: Story = {
  name: 'ارتفاع خط فارسی',
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <Text leading="normal">
        ارتفاع خط معمولی — متن فارسی برای خوانایی به فضای عمودی بیشتری نیاز دارد و برای همین
        توکن relaxed پیش‌بینی شده است.
      </Text>
      <Text leading="relaxed" className="border-t border-border pt-4">
        ارتفاع خط relaxed — همان متن با توکن relaxed؛ تفاوت در تراکم خطوط را مقایسه کنید.
      </Text>
    </div>
  ),
};
