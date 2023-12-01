'use client';
import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { ReactNode, useEffect } from 'react';

export const Checker = ({ children }: { children: ReactNode }) => {
  const setUser = useUserStore((state: IState) => state.setUser);
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
          console.error(err);
        });
    }
    // eslint-disable-next-line
  }, [storeToken]);

  return <>{children}</>;
};
