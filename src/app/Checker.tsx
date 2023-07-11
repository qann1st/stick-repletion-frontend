'use client';
import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { ReactNode, useEffect, useState } from 'react';
import Loading from './loading';

export const Checker = ({ children }: { children: ReactNode }) => {
  const setUser = useUserStore((state: IState) => state.setUser);
  const [isLoading, setIsLoading] = useState(true);
  const storeToken = useUserStore((state: IState) => state.accessToken);
  const setAccessToken = useUserStore((state: IState) => state.setAccessToken);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token && token !== 'undefined') {
      setAccessToken(token);
      api.setToken(token);
      api
        .getUserMe()
        .then(res => {
          setUser(res);
        })
        .catch(err => {
          console.error();
          err;
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [storeToken]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};
