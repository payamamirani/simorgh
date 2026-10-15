import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from './Kbd';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Typography/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { children: 'Ctrl' } };

export const Shortcuts: Story = {
  name: 'میان‌برها',
  render: () => (
    <Stack gap="3" className="w-96">
      <Stack direction="row" gap="2" align="center">
        <Kbd>Ctrl</Kbd>
        <Text size="caption" tone="muted">
          +
        </Text>
        <Kbd>S</Kbd>
        <Text size="caption">ذخیره</Text>
      </Stack>
      <Stack direction="row" gap="2" align="center">
        <Kbd>Esc</Kbd>
        <Text size="caption">بستن مودال</Text>
      </Stack>
      <Stack direction="row" gap="2" align="center">
        <Kbd>Shift</Kbd>
        <Text size="caption" tone="muted">
          +
        </Text>
        <Kbd>?</Kbd>
        <Text size="caption">راهنما</Text>
      </Stack>
    </Stack>
  ),
};
