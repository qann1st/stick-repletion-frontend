'use client';
import { api } from '@/shared/api';
import { ReactNode, useEffect } from 'react';

export const Checker = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.setToken(token);
    }
  }, []);

  return <>{children}</>;
};
