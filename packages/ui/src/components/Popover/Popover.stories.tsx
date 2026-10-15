import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Checkbox } from '../Checkbox/Checkbox';

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'محتوای شناور تعاملی — فرم کوچک، فیلترها. برای متن کوتاه غیرضروری Tooltip را ببینید.',
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">فیلترها</Button>
      </Popover.Trigger>
      <Popover.Content align="end" className="w-80">
        <Stack gap="4">
          <Text weight="medium">نمایش موارد</Text>
          <Stack gap="3">
            <Checkbox label="سفارش‌های باز" defaultChecked />
            <Checkbox label="در انتظار پرداخت" defaultChecked />
            <Checkbox label="تحویل‌شده‌ها" />
          </Stack>
          <Popover.Close asChild>
            <Button size="sm" className="self-end">
              اعمال
            </Button>
          </Popover.Close>
        </Stack>
      </Popover.Content>
    </Popover>
  ),
};

export const Simple: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="ghost">جزئیات ارسال</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Stack gap="2">
          <Text weight="medium">ارسال با پست پیشتاز</Text>
          <Text size="caption" tone="muted" leading="relaxed">
            کد رهگیری: ۲۴۵۱۸۷
            <br />
            تحویل تخمینی: ۳ روز کاری
          </Text>
        </Stack>
      </Popover.Content>
    </Popover>
  ),
};
