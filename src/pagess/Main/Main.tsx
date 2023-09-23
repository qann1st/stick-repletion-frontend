'use client';
import { useEffect } from 'react';
import { QuestionsList } from '../../widgets/QuestionsList';
import { IQuestionsState, useQuestionsStore } from '@shared/store';

const Main = () => {
  const [questions, fetching, totalCount, getQuestions, addQuestions] =
    useQuestionsStore((state: IQuestionsState) => [
      state.questions,
      state.fetching,
      state.totalCount,
      state.getQuestions,
      state.addQuestions,
    ]);

  useEffect(() => {
    if (fetching) {
      getQuestions();
    }
    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
    // eslint-disable-next-line
  }, [questions]);

  useEffect(() => {
    getQuestions();
  }, []);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      questions.length < totalCount
    ) {
      addQuestions();
    }
  };

  return <QuestionsList />;
};

export default Main;
