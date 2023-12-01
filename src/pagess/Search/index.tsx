import dynamic from 'next/dynamic';
import Loading from '../../app/loading';

const DynamicSearch = dynamic(() => import('./Search'), {
  loading: () => <Loading />,
});

export const SearchPage = () => <DynamicSearch />;
