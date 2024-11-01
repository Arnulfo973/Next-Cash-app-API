'use client';
import { AdminRegisterUsers, UserRegister } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CodeAction } from './code-number';
import { CellAction } from './cell-action';

export const columns: ColumnDef<AdminRegisterUsers & UserRegister>[] = [
  {
    accessorKey: 'id',
    header: 'NO',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'phonenumber',
    header: 'PHONE NUMBER'
  },
  {
    accessorKey: 'ip',
    header: 'IP ADDRESS',
    cell: ({ row }) => (<span>{row.original.user.ip}</span>),
  },
  {
    accessorKey: 'regitype',
    header: 'REGISTER TYPE'
  },
  {
    id: 'actions',
    header: 'CODE NUMBER',
    cell: ({ row }) => <CodeAction phoneNumber={row.original.phonenumber} codeNumber = {row.original.codenumber} userName={row.original.user._id}/>
  },
  {
    id: 'actions',
    header:'ACTION',
    cell: ({ row }) => <CellAction phoneNumber= {row.original.phonenumber} userId = {row.original.user._id} />
  }
];
