import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'تب — سوییچ بین نماهای هم‌خانواده در همان صفحه. ناوبری با فلش‌های چپ/راست (خودکار RTL) و aria کامل.',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[32rem]">
      <Tabs.List>
        <Tabs.Trigger value="overview">نمای کلی</Tabs.Trigger>
        <Tabs.Trigger value="orders">سفارش‌ها</Tabs.Trigger>
        <Tabs.Trigger value="settings">تنظیمات</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <Text leading="relaxed">
          این نمای کلی است — خلاصه‌ای از وضعیت حساب، آخرین فعالیت‌ها و نمودار مصرف.
        </Text>
      </Tabs.Content>
      <Tabs.Content value="orders">
        <Text leading="relaxed">لیست سفارش‌های اخیر با وضعیت پرداخت و ارسال.</Text>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <Text leading="relaxed">تنظیمات حساب، امنیت و اعلان‌ها.</Text>
      </Tabs.Content>
    </Tabs>
  ),
};

export const WithBadge: Story = {
  name: 'با نشان شمارنده',
  render: () => (
    <Tabs defaultValue="inbox" className="w-[32rem]">
      <Tabs.List>
        <Tabs.Trigger value="inbox">
          صندوق ورودی
          <Badge tone="danger" variant="solid">
            ۳
          </Badge>
        </Tabs.Trigger>
        <Tabs.Trigger value="archive">بایگانی</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="inbox">
        <Stack gap="2">
          <Text>سه پیام خوانده‌نشده دارید.</Text>
          <Text tone="muted" size="caption">
            نشان داخل تب با کامپوننت Badge ترکیب شده است.
          </Text>
        </Stack>
      </Tabs.Content>
      <Tabs.Content value="archive">
        <Text>بایگانی خالی است.</Text>
      </Tabs.Content>
    </Tabs>
  ),
};
