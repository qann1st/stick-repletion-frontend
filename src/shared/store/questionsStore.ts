import { create } from 'zustand';
import { IQuestion } from '../types';

export interface IState {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
}

export const useQuestionsStore = create<IState>()((set, get) => ({
  questions: [],
  setQuestions: question => {
    const { questions } = get();
    set(() => ({ questions: [...questions, ...question] }));
  },
}));
