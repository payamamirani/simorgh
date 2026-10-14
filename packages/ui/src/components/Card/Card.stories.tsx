import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'کارت — سطح بالا برای گروه‌بندی محتوای مرتبط. API ترکیبی (Card.Header / Card.Body / Card.Footer) تا محتوا آزاد بماند.',
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Card className="w-96">
      <Card.Header>
        <Heading as="h3" size="h2">
          عنوان کارت
        </Heading>
        <Badge tone="primary">جدید</Badge>
      </Card.Header>
      <Card.Body>
        <Text leading="relaxed">
          این یک کارت نمونه است. ساختار سه‌بخشی (سرصفحه، بدنه، پاصفحه) با فاصله و خط جداکننده‌ی
          توکنی — بدون اینکه محتوا را قفل کند.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button size="sm" variant="secondary">
          جزئیات
        </Button>
        <Button size="sm">شروع کنید</Button>
      </Card.Footer>
    </Card>
  ),
};

export const ProductCard: Story = {
  name: 'کارت محصول',
  render: () => (
    <Card className="w-96">
      <Card.Body className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <Stack gap="1">
            <Heading as="h3" size="h2">
              اشتراک سیمرغ
            </Heading>
            <Text size="caption" tone="muted">
              دوره‌ی سالانه
            </Text>
          </Stack>
          <Badge tone="success" variant="solid">
            فعال
          </Badge>
        </div>
        <Text weight="bold">۲٬۴۵۰٬۰۰۰ تومان</Text>
        <Text size="caption" tone="muted" leading="relaxed">
          شامل همه‌ی کامپوننت‌ها، به‌روزرسانی خودکار و پشتیبانی رسمی در ساعات کاری.
        </Text>
      </Card.Body>
      <Card.Footer className="justify-end">
        <Button size="sm" variant="ghost">
          انصراف
        </Button>
        <Button size="sm">تمدید اشتراک</Button>
      </Card.Footer>
    </Card>
  ),
};
