import dynamic from 'next/dynamic';
import Loading from '../../app/loading';

const DynamicQuestion = dynamic(() => import('./Question'), {
  loading: () => <Loading />,
});

export const Question = () => <DynamicQuestion />;
