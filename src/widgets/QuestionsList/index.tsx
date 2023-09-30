'use client';
import styles from './QuestionsList.module.css';
import { IQuestionsState, useQuestionsStore } from '@shared/store';
import { Question } from '@entities';

export function QuestionsList() {
  const questions = useQuestionsStore(
    (state: IQuestionsState) => state.questions
  );

  return (
    <section className="flex flex-col gap-1 p-10 rounded-md h-max">
      {questions.length ? (
        questions.map((question, i) => (
          <Question
            _id={question._id}
            createTimestamp={question.createTimestamp}
            tags={question.tags}
            owner={question.owner}
            title={question.title}
            answers={question.answers}
            likes={question.likes}
            dislikes={question.dislikes}
            key={question._id}
          />
        ))
      ) : (
        <section className="flex justify-center">
          <p>Сейчас вопросов нет, но вы можете задать его!</p>
        </section>
      )}
    </section>
  );
}
