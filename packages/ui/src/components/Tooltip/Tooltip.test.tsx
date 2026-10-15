import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

describe('Tooltip', () => {
  it('با هاور نمایش داده می‌شود', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip.Provider>
        <Tooltip content="توضیح دکمه">
          <Button>هاور کن</Button>
        </Tooltip>
      </Tooltip.Provider>,
    );
    await user.hover(screen.getByRole('button', { name: 'هاور کن' }));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('توضیح دکمه');
  });
});
