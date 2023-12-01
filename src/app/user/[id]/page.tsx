'use client';

import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter();
  const setUser = useUserStore((state: IState) => state.setUser);
  const setAccessToken = useUserStore((state: IState) => state.setAccessToken);

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          router.push('/');
          setUser(null);
          setAccessToken('');
          api.setToken('');
        }}
      >
        Logout!
      </button>
    </div>
  );
};
export default Profile;
