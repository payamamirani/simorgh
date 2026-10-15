import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Field } from '../Field/Field';

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ورودی چندخطی — همون شاخه‌ی Input با ارتفاع خط relaxed برای متن فارسی و قابلیت تغییر اندازه عمودی.',
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { placeholder: 'توضیحات خود را بنویسید…', className: 'w-96' },
};

export const Invalid: Story = {
  args: { invalid: true, defaultValue: '', className: 'w-96', placeholder: 'چرا خالی است؟' },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    className: 'w-96',
    defaultValue: 'این متن قابل ویرایش نیست.',
  },
};

export const WithCounter: Story = {
  name: 'در فرم (ترکیب با Field)',
  render: () => (
    <div className="w-96">
      <Field label="توضیحات" hint="حداقل دو جمله درباره‌ی خودتان">
        <Textarea placeholder="بنویسید…" />
      </Field>
    </div>
  ),
};
