import dynamic from 'next/dynamic';
import Loading from '../../app/loading';

const DynamicSignUp = dynamic(() => import('./SignUp'), {
  loading: () => <Loading />,
});

export const SignUp = () => <DynamicSignUp />;
