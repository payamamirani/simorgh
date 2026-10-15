import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('رندر می‌شود و تایپ کار می‌کند', async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="بنویسید" />);
    const textarea = screen.getByPlaceholderText('بنویسید');
    await user.type(textarea, 'سلام دنیا');
    expect(textarea).toHaveValue('سلام دنیا');
  });

  it('invalid → aria-invalid', () => {
    render(<Textarea invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('disabled → تایپ نمی‌شود', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Textarea disabled onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'تست');
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(onChange).not.toHaveBeenCalled();
  });
});
