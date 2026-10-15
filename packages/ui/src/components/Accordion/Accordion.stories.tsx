import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Navigation/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'بخش‌های تاشو — سؤالات متداول، تنظیمات گروهی. با type="multiple" چند بخش هم‌زمان باز می‌مانند.',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj;

const faq = [
  {
    q: 'سیستم دیزاین سیمرغ چیست؟',
    a: 'مجموعه‌ای از توکن‌ها، کامپوننت‌ها و اصول طراحی برای ساخت محصولاتی یکپارچه — مثل سیمرغ که از پرهای بسیاری شکل می‌گیرد.',
  },
  {
    q: 'چطور تم تیره را فعال کنم؟',
    a: 'کافی است روی تگ html اتریبیوت data-theme="dark" بگذارید. همه‌ی کامپوننت‌ها خودشان را با آن هماهنگ می‌کنند.',
  },
  {
    q: 'آیا پشتیبانی از راست‌به‌چپ کامل است؟',
    a: 'بله — تمام کامپوننت‌ها با ویژگی‌های منطقی CSS ساخته شده‌اند و جهت فاصله‌ها، آیکون‌ها و انیمیشن‌ها با dir هماهنگ می‌شود.',
  },
];

export const Playground: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[32rem]">
      {faq.map((item, i) => (
        <Accordion.Item key={item.q} value={`item-${i}`}>
          <Accordion.Trigger>{item.q}</Accordion.Trigger>
          <Accordion.Content>{item.a}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  name: 'چندتایی',
  render: () => (
    <Accordion type="multiple" defaultValue={['item-0']} className="w-[32rem]">
      {faq.map((item, i) => (
        <Accordion.Item key={item.q} value={`item-${i}`}>
          <Accordion.Trigger>{item.q}</Accordion.Trigger>
          <Accordion.Content>{item.a}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};
