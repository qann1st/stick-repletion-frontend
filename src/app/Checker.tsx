'use client';
import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { ReactNode, useEffect, useState } from 'react';
import Loading from './loading';

export const Checker = ({ children }: { children: ReactNode }) => {
  const setUser = useUserStore((state: IState) => state.setUser);
  const [isLoading, setIsLoading] = useState(true);
  const token = useUserStore((state: IState) => state.accessToken);

  useEffect(() => {
    if (token && token !== 'undefined') {
      api.setToken(token);
      api
        .getUserMe()
        .then(res => {
          setUser(res);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};
