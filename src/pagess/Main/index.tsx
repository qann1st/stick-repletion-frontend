import dynamic from 'next/dynamic';
import Loading from '../../app/loading';

const DynamicMain = dynamic(() => import('./Main'), {
  loading: () => <Loading />,
});

export const Main = () => <DynamicMain />;
