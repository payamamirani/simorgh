import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';
import { Field } from '../Field/Field';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'رادیو — انتخاب یک گزینه از چند مورد (تا ~۵ گزینه). ناوبری با فلش‌های کیبورد خودکار است. برای گزینه‌های بیشتر Select را ببینید.',
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="w-96" aria-label="روش پرداخت">
      <Radio value="card" label="کارت بانکی" description="شبا/کارت — تسویه فوری" />
      <Radio value="wallet" label="کیف پول" description="حداکثر تا سقف موجودی" />
      <Radio value="credit" label="اعتبار سازمانی" description="با تأیید مالی" />
    </RadioGroup>
  ),
};

export const WithField: Story = {
  name: 'در فرم (با Field)',
  render: () => (
    <div className="w-96">
      <Field label="روش ارسال" required hint="پس از تأیید سفارش قابل تغییر نیست">
        <RadioGroup defaultValue="post">
          <Radio value="post" label="پست پیشتاز" description="۳ تا ۵ روز کاری" />
          <Radio value="express" label="پیک موتوری" description="فقط تهران — امروز" />
        </RadioGroup>
      </Field>
    </div>
  ),
};

export const Invalid: Story = {
  name: 'با خطا',
  render: () => (
    <Field label="انتخاب پلن" error="یکی از پلن‌ها را انتخاب کنید." className="w-96">
      <RadioGroup invalid name="plan">
        <Radio value="free" label="رایگان" />
        <Radio value="pro" label="حرفه‌ای" />
      </RadioGroup>
    </Field>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="a" className="w-96" aria-label="گزینه‌ها">
      <Radio value="a" label="قابل انتخاب" />
      <Radio value="b" label="غیرفعال" disabled description="در پلن شما موجود نیست" />
    </RadioGroup>
  ),
};
