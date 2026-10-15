import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { ChevronDownIcon } from '../Icon/icons';

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'جدول داده — ساختار معنایی کامل (scope، align منطقی) و اسکرول افقی خودکار.',
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj;

const orders = [
  { id: '۲۴۵۱', customer: 'سیمرغ ایرانی', status: 'در حال پردازش', tone: 'info' as const, total: '۱٬۲۰۰٬۰۰۰' },
  { id: '۲۴۵۰', customer: 'پروین اعتصامی', status: 'تحویل شده', tone: 'success' as const, total: '۸۹۰٬۰۰۰' },
  { id: '۲۴۴۹', customer: 'سهراب سپهری', status: 'در انتظار پرداخت', tone: 'warning' as const, total: '۲٬۴۵۰٬۰۰۰' },
  { id: '۲۴۴۸', customer: 'فروغ فرخزاد', status: 'لغو شده', tone: 'danger' as const, total: '۵۶۰٬۰۰۰' },
];

export const Playground: Story = {
  render: () => (
    <div className="w-[40rem]">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>شماره</Table.Head>
            <Table.Head>مشتری</Table.Head>
            <Table.Head>وضعیت</Table.Head>
            <Table.Head className="text-end">مبلغ (تومان)</Table.Head>
            <Table.Head className="w-10" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell>{order.id}</Table.Cell>
              <Table.Cell>{order.customer}</Table.Cell>
              <Table.Cell>
                <Badge tone={order.tone}>{order.status}</Badge>
              </Table.Cell>
              <Table.Cell className="text-end font-medium">{order.total}</Table.Cell>
              <Table.Cell>
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <Button variant="ghost" size="sm" aria-label="اکشن‌های سفارش">
                      <ChevronDownIcon size="sm" />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end">
                    <DropdownMenu.Item>مشاهده جزئیات</DropdownMenu.Item>
                    <DropdownMenu.Item tone="danger">لغو</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};

export const SelectedRow: Story = {
  name: 'ردیف انتخاب‌شده',
  render: () => (
    <div className="w-[28rem]">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>نام</Table.Head>
            <Table.Head>نقش</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row data-state="selected">
            <Table.Cell>سیمرغ ایرانی</Table.Cell>
            <Table.Cell>مدیر</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>رودکی</Table.Cell>
            <Table.Cell>نویسنده</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
};
