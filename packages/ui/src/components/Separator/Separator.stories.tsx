import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { className: 'w-64' } };

export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <Text>بخش اول</Text>
      <Separator className="my-4" />
      <Text tone="muted">بخش دوم — با فاصله‌ی عمودی توکنی</Text>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" gap="4" align="center" className="h-8">
      <Text>ایمیل</Text>
      <Separator orientation="vertical" />
      <Text>تلفن</Text>
      <Separator orientation="vertical" />
      <Text>آدرس</Text>
    </Stack>
  ),
};
