'use client';
import { useEffect } from 'react';
import { QuestionsList } from '../../widgets/QuestionsList';
import { IQuestionsState, useQuestionsStore } from '@shared/store';
import Loading from '../../app/loading';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Main = () => {
  const [questions, fetching, totalCount, getQuestions, addQuestions] =
    useQuestionsStore((state: IQuestionsState) => [
      state.questions,
      state.fetching,
      state.totalCount,
      state.getQuestions,
      state.addQuestions,
    ]);

  const router = useRouter();

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
    // eslint-disable-next-line
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

  return fetching ? (
    <Loading />
  ) : (
    <div className="flex items-center flex-col pt-6">
      <div>
        <Button onClick={() => router.push('/newquestion')} color="primary">
          Задать вопрос
        </Button>
      </div>
      <QuestionsList />
    </div>
  );
};

export { Main };
