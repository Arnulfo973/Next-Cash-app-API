'use client';
import { AdminRegisterUsers, PaymentDeposits } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<AdminRegisterUsers & PaymentDeposits>[] = [
  {
    accessorKey: 'id',
    header: 'NO',
    cell: ({row}) => row.index + 1
  },
  {
    accessorKey: 'username',
    header: 'USERNAME',
    cell: ({ row }) => (
      <span>
        {row.original.firstname} {row.original.lastname}
      </span>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => `$${row.original.totalAmount}` 
  },
];