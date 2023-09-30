import { create } from 'zustand';
import { IUser } from '../types';

export interface IState {
  user: IUser | null;
  accessToken: string;
  setAccessToken: (token: string) => void;
  setUser: (user: IUser | null) => void;
}

export const useUserStore = create<IState>()(set => ({
  user: null,
  accessToken: '',
  setAccessToken: token => {
    set(() => ({ accessToken: token }));
  },
  setUser: user => set(() => ({ user: user })),
}));
