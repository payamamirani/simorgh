import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Accordion } from './Accordion';

const accordion = (
  <Accordion type="single" collapsible>
    <Accordion.Item value="a">
      <Accordion.Trigger>سؤال اول</Accordion.Trigger>
      <Accordion.Content>پاسخ اول</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="b">
      <Accordion.Trigger>سؤال دوم</Accordion.Trigger>
      <Accordion.Content>پاسخ دوم</Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

describe('Accordion', () => {
  it('محتوا در ابتدا بسته است', () => {
    render(accordion);
    expect(screen.queryByText('پاسخ اول')).not.toBeInTheDocument();
  });

  it('کلیک تریگر بخش را باز می‌کند', async () => {
    const user = userEvent.setup();
    render(accordion);
    await user.click(screen.getByRole('button', { name: 'سؤال اول' }));
    expect(screen.getByText('پاسخ اول')).toBeInTheDocument();
  });

  it('در حالت single، باز کردن بخش دیگری قبلی را می‌بندد', async () => {
    const user = userEvent.setup();
    render(accordion);
    await user.click(screen.getByRole('button', { name: 'سؤال اول' }));
    await user.click(screen.getByRole('button', { name: 'سؤال دوم' }));
    expect(screen.getByText('پاسخ دوم')).toBeInTheDocument();
    expect(screen.queryByText('پاسخ اول')).not.toBeInTheDocument();
  });
});
