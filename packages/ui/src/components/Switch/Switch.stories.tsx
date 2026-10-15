import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'کلید روشن/خاموش — برای تنظیمات فوری. با aria و کیبورد کامل؛ جهت حرکت در RTL خودکار برعکس می‌شود.',
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { label: 'حالت تاریک', defaultChecked: true } };

export const WithDescription: Story = {
  name: 'با توضیح',
  args: {
    label: 'اعلان ایمیلی',
    description: 'خلاصه‌ی روزانه به صندوق ورودی شما',
  },
};

export const States: Story = {
  name: 'همه‌ی حالت‌ها',
  render: () => (
    <Stack gap="4" className="w-96">
      <Switch label="خاموش" />
      <Switch label="روشن" defaultChecked />
      <Switch label="خطا" invalid defaultChecked />
      <Switch label="غیرفعال" disabled />
      <Switch label="غیرفعال روشن" disabled defaultChecked />
    </Stack>
  ),
};
