'use client';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import { QuestionsList } from '../../widgets/QuestionsList';
import { IQuestionsState, useQuestionsStore } from '@shared/store';
import { shallow } from 'zustand/shallow';

const Main = () => {
  const [fetching, currentPage, totalCount, setQuestions, addQuestions] =
    useQuestionsStore(
      (state: IQuestionsState) => [
        state.fetching,
        state.currentPage,
        state.totalCount,
        state.getQuestions,
        state.addQuestions,
      ],
      shallow
    );

  useEffect(() => {
    if (fetching) {
      setQuestions();
    }
    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
    // eslint-disable-next-line
  }, []);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      currentPage < totalCount
    ) {
      addQuestions();
    }
  };

  return <QuestionsList />;
};

export default Main;
