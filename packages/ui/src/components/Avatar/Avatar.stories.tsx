import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<{
  size?: 'sm' | 'md' | 'lg';
  fallback?: React.ReactNode;
  src?: string;
}>;

export const Playground: Story = { args: { fallback: 'س', size: 'md' } };

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="4" align="end">
      <Avatar size="sm" fallback="س" />
      <Avatar size="md" fallback="سی" />
      <Avatar size="lg" fallback="سیمرغ" />
    </Stack>
  ),
};

export const Group: Story = {
  name: 'گروه کاربران',
  render: () => (
    <Stack direction="row" gap="2" align="center">
      {['ع', 'ن', 'م', 'ر'].map((letter, i) => (
        <Avatar
          key={letter}
          size={i === 0 ? 'md' : 'sm'}
          fallback={letter}
          className={i > 0 ? '-ms-2 ring-2 ring-surface' : ''}
        />
      ))}
      <Text size="caption" tone="muted" className="ms-2">
        +۱۲ نفر دیگر
      </Text>
    </Stack>
  ),
};

export const WithImage: Story = {
  name: 'با تصویر',
  render: () => (
    <Stack direction="row" gap="4" align="center">
      <Avatar
        size="lg"
        src="https://i.pravatar.cc/96?img=68"
        fallback="س"
        alt="کاربر نمونه"
      />
      <Stack gap="1">
        <Text weight="medium">کاربر نمونه</Text>
        <Text size="caption" tone="muted">
          تا لود تصویر، حروف اول نام نمایش داده می‌شود
        </Text>
      </Stack>
    </Stack>
  ),
};
