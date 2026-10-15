import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Typography/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { children: 'npm install @simorgh/ui' } };

export const InText: Story = {
  name: 'در متن فارسی',
  render: () => (
    <Stack gap="3" className="w-[28rem]">
      <Text leading="relaxed">
        برای نصب دستور <Code>pnpm add @simorgh/ui</Code> را اجرا کنید و سپس استایل‌ها را از{' '}
        <Code>@simorgh/ui/styles.css</Code> وارد کنید.
      </Text>
      <Text leading="relaxed">
        تم تیره با <Code dir="ltr">data-theme="dark"</Code> فعال می‌شود.
      </Text>
    </Stack>
  ),
};
