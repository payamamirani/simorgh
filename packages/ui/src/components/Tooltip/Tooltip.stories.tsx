import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { InfoIcon } from '../Icon/icons';

const meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Tooltip.Provider delayDuration={200}>
        <Story />
      </Tooltip.Provider>
    ),
  ],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <Tooltip content="این دکمه تغییرات را ذخیره می‌کند">
      <Button variant="secondary">هاور کن</Button>
    </Tooltip>
  ),
};

export const Sides: Story = {
  name: 'جهت‌های نمایش',
  render: () => (
    <div className="flex gap-3">
      <Tooltip content="بالا" side="top">
        <Button variant="ghost" size="sm">
          بالا
        </Button>
      </Tooltip>
      <Tooltip content="پایین" side="bottom">
        <Button variant="ghost" size="sm">
          پایین
        </Button>
      </Tooltip>
      <Tooltip content="راست" side="right">
        <Button variant="ghost" size="sm">
          راست
        </Button>
      </Tooltip>
      <Tooltip content="چپ" side="left">
        <Button variant="ghost" size="sm">
          چپ
        </Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'کنار آیکون',
  render: () => (
    <Text as="span" className="inline-flex items-center gap-1.5">
      فضای ذخیره‌سازی
      <Tooltip content="فضای مصرفی فایل‌های شما — ماهانه شارژ می‌شود">
        <span tabIndex={0} className="text-text-muted">
          <InfoIcon size="sm" />
        </span>
      </Tooltip>
    </Text>
  ),
};
