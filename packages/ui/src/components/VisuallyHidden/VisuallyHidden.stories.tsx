import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from './VisuallyHidden';
import { Button } from '../Button/Button';
import { XIcon } from '../Icon/icons';
import { Text } from '../Text/Text';

const meta = {
  title: 'Utilities/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'متنی که دیده نمی‌شود اما صفحه‌خوان می‌خواند — برای لیبل‌دهی دکمه‌های آیکونی و متن‌های کمکی.',
      },
    },
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <Button variant="ghost" aria-label="بستن پنل">
      <XIcon />
      <VisuallyHidden>بستن پنل</VisuallyHidden>
    </Button>
  ),
};

export const Explanation: Story = {
  render: () => (
    <Text>
      این جمله یک متن پنهان دارد: «سلام از دل صفحه‌خوان» —
      <VisuallyHidden>سلام از دل صفحه‌خوان</VisuallyHidden>
      اما فقط با فناوری کمکی خوانده می‌شود.
    </Text>
  ),
};
