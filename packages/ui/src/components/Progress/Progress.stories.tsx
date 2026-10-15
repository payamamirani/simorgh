import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'نوار پیشرفت — با width (نه transform) تا در RTL از راست پر شود.',
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { value: 60, className: 'w-96' } };

export const Steps: Story = {
  render: () => (
    <Stack gap="6" className="w-96">
      {[
        ['در صف', 0],
        ['۲۵٪', 25],
        ['نیمه', 50],
        ['تقریباً', 85],
        ['کامل', 100],
      ].map(([label, value]) => (
        <Stack key={String(value)} gap="1">
          <Text size="caption" tone="muted">
            {label}
          </Text>
          <Progress value={value as number} />
        </Stack>
      ))}
    </Stack>
  ),
};
