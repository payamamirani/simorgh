import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

describe('Modal', () => {
  it('با کلیک روی تریگر باز می‌شود و عنوان را نشان می‌دهد', async () => {
    const user = userEvent.setup();
    render(
      <Modal>
        <Modal.Trigger asChild>
          <Button>باز کن</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>عنوان مودال</Modal.Title>
            <Modal.Description>توضیح مودال</Modal.Description>
          </Modal.Header>
        </Modal.Content>
      </Modal>,
    );
    await user.click(screen.getByRole('button', { name: 'باز کن' }));
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'عنوان مودال' })).toBeInTheDocument();
  });

  it('با Escape بسته می‌شود', async () => {
    const user = userEvent.setup();
    render(
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>تست</Modal.Title>
          </Modal.Header>
        </Modal.Content>
      </Modal>,
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('دکمه‌ی بستن با aria-label فارسی موجود است', async () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>تست</Modal.Title>
          </Modal.Header>
        </Modal.Content>
      </Modal>,
    );
    expect(screen.getByRole('button', { name: 'بستن' })).toBeInTheDocument();
  });

  it('onOpenChange گزارش می‌شود', async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Modal onOpenChange={onOpenChange}>
        <Modal.Trigger asChild>
          <Button>باز</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>تست</Modal.Title>
          </Modal.Header>
        </Modal.Content>
      </Modal>,
    );
    await user.click(screen.getByRole('button', { name: 'باز' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });
});
