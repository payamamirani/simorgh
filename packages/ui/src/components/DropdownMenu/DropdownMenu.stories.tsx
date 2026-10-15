import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { CheckIcon, PlusIcon, XIcon } from '../Icon/icons';

const meta = {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'منوی اکشن‌ها — باز شدن با کلیک، ناوبری با فلش‌ها، بستن با Escape. آیتم مخرب با tone="error".',
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">اکشن‌ها</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start">
        <DropdownMenu.Label>سفارش #۲۴۵۱</DropdownMenu.Label>
        <DropdownMenu.Item>
          <CheckIcon size="sm" />
          تأیید سفارش
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <PlusIcon size="sm" />
          افزودن یادداشت
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item tone="error">
          <XIcon size="sm" />
          لغو سفارش
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const Alignments: Story = {
  name: 'ترازهای مختلف',
  render: () => (
    <Stack direction="row" gap="3" className="w-96 justify-center">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm">
            start
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="start">
          <DropdownMenu.Item>گزینه</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm">
            center
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="center">
          <DropdownMenu.Item>گزینه</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" size="sm">
            end
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item>گزینه</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Stack>
  ),
};

export const WithIcons: Story = {
  name: 'با آیکون و توضیح',
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>مدیریت فایل</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>عملیات</DropdownMenu.Label>
          <DropdownMenu.Item>
            <PlusIcon size="sm" />
            اشتراک‌گذاری
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            <XIcon size="sm" />
            حذف (غیرفعال)
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
