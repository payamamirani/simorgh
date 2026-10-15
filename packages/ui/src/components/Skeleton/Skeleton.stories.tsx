import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Stack } from '../Stack/Stack';
import { Avatar } from '../Avatar/Avatar';
import { Text } from '../Text/Text';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { className: 'h-4 w-64' } };

export const CardSkeleton: Story = {
  name: 'کارت در حال بارگذاری',
  render: () => (
    <Stack gap="4" className="w-96">
      <Stack direction="row" gap="3" align="center">
        <Skeleton className="size-10 rounded-full" />
        <Stack gap="2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </Stack>
      </Stack>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
    </Stack>
  ),
};

export const WithAvatarFallback: Story = {
  name: 'مقایسه با محتوای واقعی',
  render: () => (
    <Stack gap="4" className="w-96">
      <Stack direction="row" gap="3" align="center">
        <Avatar fallback="س" />
        <Stack gap="1">
          <Text size="caption" weight="medium">
            سیمرغ ایرانی
          </Text>
          <Text size="caption" tone="muted">
            بارگذاری شد ✓
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" gap="3" align="center">
        <Skeleton className="size-10 rounded-full" />
        <Stack gap="2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-16" />
        </Stack>
      </Stack>
    </Stack>
  ),
};
