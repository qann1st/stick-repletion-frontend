import { create } from 'zustand';
import { IUser } from '../types';

export interface IState {
  user: IUser | null;
  accessToken: string;
  setAccessToken: (token: string) => void;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<IState>()(set => ({
  user: null,
  accessToken: localStorage.getItem('token') ?? '',
  setAccessToken: token => {
    localStorage.setItem('token', token);
    set(() => ({ accessToken: token }));
  },
  setUser: user => set(() => ({ user: user })),
}));
