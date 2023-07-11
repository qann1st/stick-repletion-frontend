import { create } from 'zustand';
import { IQuestion } from '../types';

export interface IState {
  questions: IQuestion[];
  setQuestions: (question: IQuestion[]) => void;
  addQuestions: (question: IQuestion[]) => void;
}

export const useQuestionsStore = create<IState>()((set, get) => ({
  questions: [],
  setQuestions: question => {
    set(() => ({ questions: question }));
  },
  addQuestions: question => {
    const { questions } = get();
    set(() => ({ questions: [...questions, ...question] }));
  },
}));
