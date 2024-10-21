'use client';
import { Checkbox } from '@/components/ui/checkboxdaily';
import { AdminRegisterUsers, PaymentDeposits } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { CheckboxBonus } from '@/components/ui/checkboxbonus';

export const columns: ColumnDef<AdminRegisterUsers & PaymentDeposits>[] = [
  {
    accessorKey: 'id',
    header: 'NO',
    cell: ({row}) => row.index + 1
  },
  {
    accessorKey: 'user.regitype',
    header: 'REGISTER TYPE'
  },
  {
    accessorKey: 'username',
    header: 'USERNAME',
    cell: ({ row }) => (
      <span>
        {row.original.user.firstname} {row.original.user.lastname}
      </span>
    ),
  },
  {
    accessorKey: 'user.loginid',
    header: 'LOGIN ID'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  },
  {
    id:'selectDaily',
    header: 'Daily',
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row for Daily"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    id: 'selectBounus',
    header: 'BONUS',
    cell: ({ row }) => (
      <CheckboxBonus
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row for Bonus"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'date',
    header: 'TIME',
    cell: ({ row }) => {
      const date = new Date(row.original.date); // Pass the date string to the Date constructor
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-11) and pad with leading zero
      const day = String(date.getDate()).padStart(2, '0'); // Get day (1-31) and pad with leading zero
      const year = date.getFullYear(); // Get full year
      const hours = String(date.getHours()).padStart(2, '0'); // Get hours (0-23) and pad with leading zero
      const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes (0-59) and pad with leading zero
  
      // Format like "10/16 24 15:16"
      return `${month}/${day} ${year.toString().slice(-2)} ${hours}:${minutes}`;
    },
  },
  {
    id: 'actions',
    header:'ACTION',
    cell: ({ row }) => <CellAction phoneNumber={row.original.user.phonenumber} Amount={row.original.amount} />
  }
];