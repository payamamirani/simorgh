import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { CheckIcon, XIcon, ChevronDownIcon, PlusIcon } from './icons';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

const meta = {
  title: 'Media/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'پایه‌ی آیکون‌های سیمرغ — خطی، با stroke یکنواخت و رنگ از متن والد (currentColor). پیش‌فرض aria-hidden است؛ فقط وقتی آیکون اطلاعات مستقلی می‌رساند label بدهید.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StarterIcons: Story = {
  name: 'آیکون‌های شروع',
  render: () => (
    <Stack direction="row" gap="8">
      <Stack align="center" gap="2">
        <CheckIcon />
        <Text size="caption" tone="muted">
          Check
        </Text>
      </Stack>
      <Stack align="center" gap="2">
        <XIcon />
        <Text size="caption" tone="muted">
          X
        </Text>
      </Stack>
      <Stack align="center" gap="2">
        <ChevronDownIcon />
        <Text size="caption" tone="muted">
          ChevronDown
        </Text>
      </Stack>
      <Stack align="center" gap="2">
        <PlusIcon />
        <Text size="caption" tone="muted">
          Plus
        </Text>
      </Stack>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="6" align="end">
      <Stack align="center" gap="2">
        <CheckIcon size="sm" />
        <Text size="caption" tone="muted">
          sm
        </Text>
      </Stack>
      <Stack align="center" gap="2">
        <CheckIcon size="md" />
        <Text size="caption" tone="muted">
          md
        </Text>
      </Stack>
      <Stack align="center" gap="2">
        <CheckIcon size="lg" />
        <Text size="caption" tone="muted">
          lg
        </Text>
      </Stack>
    </Stack>
  ),
};

export const WithButtons: Story = {
  name: 'ترکیب با دکمه',
  render: () => (
    <Stack direction="row" gap="3">
      <Button>
        <PlusIcon size="sm" />
        افزودن مورد
      </Button>
      <Button variant="secondary">
        <ChevronDownIcon size="sm" />
        گزینه‌های بیشتر
      </Button>
      <Button variant="ghost" aria-label="بستن">
        <XIcon size="sm" label="بستن" />
      </Button>
    </Stack>
  ),
};
