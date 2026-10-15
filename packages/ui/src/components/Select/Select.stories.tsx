import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Field } from '../Field/Field';

const meta = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'انتخابگر بومی — برای فرم‌ها با گزینه‌های محدود. روی موبایل پیکر بومی سیستم باز می‌شود و دسترس‌پذیری کامل دارد. برای انتخابگرهای جستجودار بعداً Combobox اضافه می‌شود.',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
  <>
    <option value="tehran">تهران</option>
    <option value="isfahan">اصفهان</option>
    <option value="shiraz">شیراز</option>
    <option value="tabriz">تبریز</option>
  </>
);

export const Playground: Story = {
  args: { placeholder: 'شهر را انتخاب کنید', children: options, className: 'w-96' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Select size="sm" placeholder="کوچک">
        {options}
      </Select>
      <Select size="md" placeholder="متوسط">
        {options}
      </Select>
      <Select size="lg" placeholder="بزرگ">
        {options}
      </Select>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="w-96">
      <Field label="شهر" error="انتخاب شهر الزامی است." required>
        <Select placeholder="انتخاب کنید" invalid>
          {options}
        </Select>
      </Field>
    </div>
  ),
};
