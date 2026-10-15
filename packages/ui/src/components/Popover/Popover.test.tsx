import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

describe('Popover', () => {
  it('با کلیک باز و با Escape بسته می‌شود', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <Popover.Trigger asChild>
          <Button>باز کن</Button>
        </Popover.Trigger>
        <Popover.Content>
          <span>محتوای پاپ‌اور</span>
        </Popover.Content>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'باز کن' }));
    expect(await screen.findByText('محتوای پاپ‌اور')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByText('محتوای پاپ‌اور')).not.toBeInTheDocument();
  });
});
