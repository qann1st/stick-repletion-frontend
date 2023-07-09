import { create } from 'zustand';
import { IUser } from '../types';

export interface IState {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const useStore = create<IState>()(set => ({
  user: null,
  setUser: user => set(() => ({ user: user })),
}));
