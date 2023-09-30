import { create } from 'zustand';
import { IQuestion } from '../types';
import { api } from '@shared/api';

export interface IState {
  questions: IQuestion[];
  currentPage: number;
  fetching: boolean;
  totalCount: number;
  getQuestions: () => void;
  addQuestions: () => void;
}

export const useQuestionsStore = create<IState>()((set, get) => ({
  questions: [],
  currentPage: 1,
  fetching: true,
  totalCount: 0,
  getQuestions: async () => {
    const { currentPage } = get();
    const questionsGet = await api.getQuestions(currentPage);
    set(() => ({
      questions: questionsGet.questions,
      totalCount: questionsGet.totalCount,
      fetching: false,
    }));
  },
  addQuestions: async () => {
    const { questions, currentPage } = get();
    const questionsGet = await api.getQuestions(currentPage + 1);
    set(() => ({
      questions: [...questions, ...questionsGet.questions],
      currentPage: currentPage + 1,
    }));
  },
}));
