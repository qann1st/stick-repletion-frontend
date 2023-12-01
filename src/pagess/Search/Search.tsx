'use client';

import { Link } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const search = useSearchParams().get('search');

  return <h1>Результаты поиска по запросу: {search}</h1>;
};

export default SearchPage;
