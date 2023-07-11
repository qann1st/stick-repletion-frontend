'use client';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import { QuestionsList } from '../../widgets/QuestionsList';
import { api } from '@shared/api';
import { IQuestionsState, useQuestionsStore } from '@shared/store';
import { IQuestion } from '@shared/types';

export const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const setQuestions = useQuestionsStore(
    (state: IQuestionsState) => state.setQuestions
  );

  useEffect(() => {
    if (fetching) {
      api
        .getQuestions(currentPage)
        .then(
          ({
            questions,
            pages,
          }: {
            questions: IQuestion[];
            pages: number | null;
          }) => {
            setQuestions(questions);
            setCurrentPage(prev => prev++);
            setTotalCount(pages ? pages : 0);
          }
        )
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      currentPage < totalCount
    ) {
      setFetching(true);
    }
  };

  return <QuestionsList />;
};
