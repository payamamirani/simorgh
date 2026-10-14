import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'تیتر — با جدا بودن «سطح معنایی» (as) از «اندازه‌ی ظاهری» (size). یعنی می‌توانید تیتر بصری بزرگ داشته باشید که در ساختار صفحه h3 است — بهترین راه برای سئوی درست.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['display', 'h1', 'h2'] },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    tone: { control: 'select', options: ['default', 'muted', 'primary'] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { children: 'سیستم دیزاین سیمرغ' } };

export const Scale: Story = {
  name: 'مقیاس تیترها',
  render: () => (
    <div className="flex w-[28rem] flex-col gap-6">
      <Heading size="display">تیتر صفحه — display</Heading>
      <Heading size="h1">تیتر بخش — h1</Heading>
      <Heading size="h2">زیرتیتر — h2</Heading>
    </div>
  ),
};

export const SemanticVsVisual: Story = {
  name: 'سطح معنایی ≠ اندازه بصری',
  render: () => (
    <div className="flex w-[28rem] flex-col gap-4">
      <Heading as="h1" size="display">
        تیتر اصلی صفحه
      </Heading>
      <Heading as="h3" size="h1">
        از نظر ساختاری h3، از نظر ظاهری h1
      </Heading>
      <Heading as="h2" size="h2" tone="muted">
        تیتر کم‌رنگ
      </Heading>
      <Heading as="h4" size="h2" tone="primary">
        تیتر فیروزه‌ای
      </Heading>
    </div>
  ),
};
