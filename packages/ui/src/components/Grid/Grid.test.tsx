import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from './Grid';
import { Table } from '../Table/Table';

describe('Grid', () => {
  it('ستون‌ها و فاصله‌ی توکنی اعمال می‌شوند', () => {
    render(
      <Grid data-testid="grid" columns={3} gap="6">
        <span>۱</span>
      </Grid>,
    );
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-3', 'gap-(--simorgh-space-6)');
  });
});

describe('Table', () => {
  it('ساختار معنایی جدول رندر می‌شود', () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head scope="col">نام</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row data-testid="row">
            <Table.Cell>سیمرغ</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(document.querySelector('table')).toBeInTheDocument();
    expect(document.querySelector('thead')).toBeInTheDocument();
    expect(document.querySelector('tbody')).toBeInTheDocument();
    const head = document.querySelector('th');
    expect(head).toHaveAttribute('scope', 'col');
    expect(screen.getByTestId('row')).toHaveClass('border-b');
  });

  it('ردیف hover و انتخاب دارد', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row data-state="selected">
            <Table.Cell>انتخاب‌شده</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByText('انتخاب‌شده').closest('tr')).toHaveAttribute('data-state', 'selected');
  });
});
