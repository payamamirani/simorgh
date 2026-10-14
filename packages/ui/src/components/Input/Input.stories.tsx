import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'فیلد ورودی متن — پایه‌ی فرم‌ها. برای لیبل و پیام خطا، آن را با عنصر label و متن راهنما ترکیب کن (دموی «همراه با لیبل و خطا» را ببین). از منوی بالا جهت و تم را عوض کن.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { placeholder: 'ایمیل خود را وارد کنید' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Input size="sm" placeholder="کوچک" />
      <Input size="md" placeholder="متوسط" />
      <Input size="lg" placeholder="بزرگ" />
    </div>
  ),
};

export const WithLabelAndError: Story = {
  name: 'همراه با لیبل و خطا',
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <label htmlFor="email" className="text-caption font-medium text-text">
        ایمیل
      </label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        defaultValue="نه-درست"
        invalid
        aria-describedby="email-error"
        dir="ltr"
      />
      <p id="email-error" className="text-caption text-danger">
        فرمت ایمیل معتبر نیست.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: 'غیرفعال', disabled: true, defaultValue: 'مقدار غیرقابل‌ویرایش' },
};

export const Types: Story = {
  name: 'انواع ورودی',
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Input type="text" placeholder="متن ساده" />
      <Input type="email" placeholder="ایمیل" dir="ltr" />
      <Input type="password" placeholder="رمز عبور" defaultValue="12345678" dir="ltr" />
      <Input type="search" placeholder="جستجو…" />
    </div>
  ),
};

export const LoginForm: Story = {
  name: 'نمونه‌ی فرم ورود',
  render: () => (
    <form
      className="flex w-80 flex-col gap-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="login-email" className="text-caption font-medium text-text">
          ایمیل
        </label>
        <Input id="login-email" type="email" placeholder="you@example.com" dir="ltr" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="login-password" className="text-caption font-medium text-text">
          رمز عبور
        </label>
        <Input id="login-password" type="password" placeholder="••••••••" dir="ltr" />
      </div>
      <Button type="submit" className="mt-2">
        ورود به حساب
      </Button>
    </form>
  ),
};
