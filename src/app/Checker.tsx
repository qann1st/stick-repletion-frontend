'use client';
import { api } from '@/shared/api';
import { IState, useStore } from '@/shared/store';
import { ReactNode, useEffect, useState } from 'react';
import Loading from './loading';

export const Checker = ({ children }: { children: ReactNode }) => {
  const setUser = useStore((state: IState) => state.setUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.setToken(token);
      api
        .getUserMe()
        .then(res => {
          setUser(res);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};
