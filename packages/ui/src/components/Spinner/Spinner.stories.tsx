import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="6" align="center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Stack>
  ),
};

export const WithLabel: Story = {
  name: 'با متن قابل‌دسترس',
  render: () => (
    <Stack direction="row" gap="3" align="center">
      <Spinner label="در حال بارگذاری" />
      <Text tone="muted" size="caption">
        با صفحه‌خوان اعلام می‌شود
      </Text>
    </Stack>
  ),
};
