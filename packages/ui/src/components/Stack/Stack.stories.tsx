import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="flex size-16 items-center justify-center rounded-md border border-border bg-surface-raised text-caption text-text-muted">
    {children}
  </div>
);

const meta = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'چیدمان عمودی/افقی با فاصله‌ی توکنی — جایگزین margin های دستی. فاصله‌ها مستقیم به توکن‌های space وصل‌اند و جهت آن با RTL/LTR خودکار هماهنگ می‌شود.',
      },
    },
  },
  argTypes: {
    gap: { control: 'select', options: ['1', '2', '3', '4', '6', '8', '12', '16'] },
    direction: { control: 'select', options: ['row', 'column'] },
    align: { control: 'select', options: ['start', 'end', 'center', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'end', 'center', 'between', 'around', 'evenly'] },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Stack className="w-72">
      <Box>۱</Box>
      <Box>۲</Box>
      <Box>۳</Box>
    </Stack>
  ),
};

export const Gaps: Story = {
  name: 'مقیاس فاصله‌ها',
  render: () => (
    <Stack gap="8" className="w-72">
      {(['2', '4', '8', '16'] as const).map((gap) => (
        <Stack key={gap} gap={gap}>
          <Text size="caption" tone="muted">
            gap={gap}
          </Text>
          <Stack direction="row" gap={gap}>
            <Box>·</Box>
            <Box>·</Box>
            <Box>·</Box>
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Row: Story = {
  name: 'چیدمان افقی',
  render: () => (
    <Stack direction="row" gap="3" align="center">
      <Badge tone="success">فعال</Badge>
      <Text>پیام‌های دریافت شد</Text>
      <Badge tone="neutral" variant="solid">
        ۳
      </Badge>
    </Stack>
  ),
};

export const List: Story = {
  name: 'به‌عنوان فهرست',
  render: () => (
    <Stack as="ul" gap="2" className="w-72 list-inside list-disc ps-4">
      <li>ساختار DOM معنایی با as="ul"</li>
      <li>فاصله‌ی یکنواخت بدون margin</li>
      <li>هماهنگ با راست‌به‌چپ</li>
    </Stack>
  ),
};
