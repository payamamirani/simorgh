import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('لیست تب و پنل‌ها رندر می‌شوند', () => {
    render(
      <Tabs defaultValue="a">
        <Tabs.List aria-label="نمایش‌ها">
          <Tabs.Trigger value="a">نمای اول</Tabs.Trigger>
          <Tabs.Trigger value="b">نمای دوم</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">محتوای اول</Tabs.Content>
        <Tabs.Content value="b">محتوای دوم</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByRole('tablist', { name: 'نمایش‌ها' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'نمای اول' })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: 'نمای اول' })).toBeInTheDocument();
  });

  it('کلیک تب، پنل عوض می‌کند', async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="a">
        <Tabs.List aria-label="نمایش‌ها">
          <Tabs.Trigger value="a">نمای اول</Tabs.Trigger>
          <Tabs.Trigger value="b">نمای دوم</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">محتوای اول</Tabs.Content>
        <Tabs.Content value="b">محتوای دوم</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByText('محتوای اول')).toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: 'نمای دوم' }));
    expect(screen.getByText('محتوای دوم')).toBeInTheDocument();
  });

  it('تب فعال data-state=checked دارد', () => {
    render(
      <Tabs defaultValue="a">
        <Tabs.List>
          <Tabs.Trigger value="a">اول</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">محتوا</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByRole('tab', { name: 'اول' })).toHaveAttribute(
      'data-state',
      'active',
    );
  });
});
