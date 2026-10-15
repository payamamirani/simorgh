import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Textarea } from '../Textarea/Textarea';
import { Checkbox } from '../Checkbox/Checkbox';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';

const meta = {
  title: 'Forms/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Field — سیم‌کشی خودکار دسترس‌پذیری فرم: لیبل (htmlFor)، پیام خطا/راهنما (aria-describedby)، خطا (aria-invalid) و ستاره‌ی الزامی — همه خودکار روی هر کنترلی.',
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<{
  label?: React.ReactNode;
  hint?: string;
  error?: string;
  required?: boolean;
}>;

export const Playground: Story = {
  render: () => (
    <Field label="ایمیل" hint="برای ورود استفاده می‌شود" className="w-96">
      <Input type="email" placeholder="you@example.com" dir="ltr" />
    </Field>
  ),
};

export const WithError: Story = {
  name: 'با خطا',
  render: () => (
    <Field label="ایمیل" error="فرمت ایمیل معتبر نیست." className="w-96">
      <Input type="email" defaultValue="not-an-email" dir="ltr" />
    </Field>
  ),
};

export const RequiredField: Story = {
  name: 'الزامی',
  render: () => (
    <Field label="نام کامل" required className="w-96">
      <Input placeholder="مثلاً: سیمرغ ایرانی" />
    </Field>
  ),
};

export const CompleteForm: Story = {
  name: 'فرم کامل',
  render: () => (
    <form
      className="flex w-96 flex-col gap-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <Heading as="h2" size="h2">
        درخواست همکاری
      </Heading>
      <Field label="نام کامل" required>
        <Input placeholder="نام و نام خانوادگی" />
      </Field>
      <Field label="ایمیل" required hint="فقط برای مکاتبه‌ی کاری">
        <Input type="email" placeholder="you@company.com" dir="ltr" />
      </Field>
      <Field label="حوزه‌ی فعالیت">
        <Select placeholder="انتخاب کنید">
          <option value="design">طراحی</option>
          <option value="frontend">فرانت‌اند</option>
          <option value="backend">بک‌اند</option>
        </Select>
      </Field>
      <Field label="درباره‌ی خودتان بنویسید" hint="حداقل دو جمله">
        <Textarea placeholder="تجربه‌ها و علاقه‌مندی‌های شما…" />
      </Field>
      <Checkbox
        label="قوانین را می‌پذیرم"
        description="شرایط استفاده از سرویس را خوانده‌ام."
      />
      <Button type="submit" className="mt-1">
        ارسال درخواست
      </Button>
    </form>
  ),
};

export const ErrorCascade: Story = {
  name: 'خطا در انواع کنترل',
  render: () => (
    <Stack gap="6" className="w-96">
      <Field label="ایمیل" error="ایمیل الزامی است.">
        <Input type="email" dir="ltr" />
      </Field>
      <Field label="شهر" error="انتخاب شهر الزامی است.">
        <Select>
          <option value="">انتخاب کنید</option>
          <option value="1">تهران</option>
        </Select>
      </Field>
      <Field label="توضیحات" error="حداقل ۱۰ کاراکتر بنویسید.">
        <Textarea />
      </Field>
    </Stack>
  ),
};
