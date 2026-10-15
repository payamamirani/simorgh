import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Field } from '../Field/Field';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

const meta = {
  title: 'Overlay/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'مودال — برای اکشن‌ها یا محتوایی که تمرکز کامل می‌خواهد. مدیریت فوکس، بستن با Escape/کلیک روی پس‌زمینه و aria از Radix Dialog. Modal.Title همیشه لازم است (برای صفحه‌خوان).',
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj;

export const Simple: Story = {
  name: 'ساده',
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>حذف حساب کاربری</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>از حذف حساب مطمئن هستید؟</Modal.Title>
          <Modal.Description>
            این عملیات غیرقابل بازگشت است و همه‌ی داده‌های شما برای همیشه حذف می‌شود.
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="secondary">انصراف</Button>
          </Modal.Close>
          <Modal.Close asChild>
            <Button>بله، حذف کن</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const WithForm: Story = {
  name: 'با فرم',
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button variant="secondary">دعوت همکار</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>دعوت همکار جدید</Modal.Title>
          <Modal.Description>
            ایمیل همکار را وارد کنید؛ دعوت‌نامه برای او ارسال می‌شود.
          </Modal.Description>
        </Modal.Header>
        <Stack gap="4">
          <Field label="ایمیل همکار" required hint="فقط ایمیل سازمانی">
            <Input type="email" placeholder="colleague@company.com" dir="ltr" />
          </Field>
          <Field label="نقش" hint="بعداً هم قابل تغییر است">
            <Input placeholder="مثلاً: ویرایشگر" />
          </Field>
        </Stack>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">انصراف</Button>
          </Modal.Close>
          <Modal.Close asChild>
            <Button>ارسال دعوت</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const Controlled: Story = {
  name: 'کنترل‌شده',
  render: () => {
    return (
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>باز شده به‌صورت پیش‌فرض</Modal.Title>
            <Modal.Description>
              با prop های open / onOpenChange از بیرون کنترل کنید — مثلاً بعد از موفقیت
              یک فرم.
            </Modal.Description>
          </Modal.Header>
          <Text size="caption" tone="muted">
            با Escape یا کلیک روی پس‌زمینه بسته می‌شود.
          </Text>
        </Modal.Content>
      </Modal>
    );
  },
};
