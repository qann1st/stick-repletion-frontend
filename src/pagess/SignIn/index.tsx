import dynamic from 'next/dynamic';
import Loading from '../../app/loading';

const DynamicSignIn = dynamic(() => import('./SignIn'), {
  loading: () => <Loading />,
});

export const SignIn = () => <DynamicSignIn />;
