import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Text } from '../Text/Text';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'چیدمان دو‌بعدی — ستون‌های هم‌عرض با فاصله‌ی توکنی (مثل Stack).',
      },
    },
  },
  argTypes: {
    columns: { control: 'select', options: [1, 2, 3, 4, 6, 12] },
    gap: { control: 'select', options: ['1', '2', '3', '4', '6', '8', '12', '16'] },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-16 items-center justify-center rounded-md border border-border bg-surface-raised text-caption text-text-muted">
    {children}
  </div>
);

export const Playground: Story = {
  args: { columns: 3, gap: '4' },
  render: (args) => (
    <Grid {...args} className="w-[32rem]">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i}>{i + 1}</Box>
      ))}
    </Grid>
  ),
};

export const ResponsiveHint: Story = {
  name: 'الگوی ریسپانسیو (با کلاس)',
  render: () => (
    <Grid columns={2} gap="4" className="w-[32rem] sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i}>{i + 1}</Box>
      ))}
    </Grid>
  ),
};
