import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { DropdownMenu } from './DropdownMenu';
import { Button } from '../Button/Button';

describe('DropdownMenu', () => {
  it('با کلیک باز می‌شود و آیتم‌ها را نشان می‌دهد', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>منو</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>ویرایش</DropdownMenu.Item>
          <DropdownMenu.Item tone="error">حذف</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    await user.click(screen.getByRole('button', { name: 'منو' }));
    expect(await screen.findByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'ویرایش' })).toBeInTheDocument();
  });

  it('کلیک روی آیتم، onClose را اجرا می‌کند', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>منو</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onSelect={onSelect}>اقدام</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );
    await user.click(screen.getByRole('button', { name: 'منو' }));
    await user.click(await screen.findByRole('menuitem', { name: 'اقدام' }));
    expect(onSelect).toHaveBeenCalled();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
