import { searchParamsCache } from '@/lib/searchparams';
import WithdrawalListingPage from '@/sections/withdrawal/views/withdrawal-listing-page';
import { SearchParams } from 'nuqs/parsers';
import React from 'react';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Main : Withdrawal'
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <WithdrawalListingPage />;
}
