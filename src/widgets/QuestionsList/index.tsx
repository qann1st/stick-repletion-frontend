'use client';
import { Flex } from '@shared';
import styles from './QuestionsList.module.css';
import { IQuestionsState, useQuestionsStore } from '@shared/store';
import { Question } from '@entities';

export function QuestionsList() {
  const questions = useQuestionsStore(
    (state: IQuestionsState) => state.questions
  );

  return (
    <Flex direction="column" className={styles.questions} as="section">
      {questions.map(question => (
        <Question
          _id={question._id}
          rating={question.rating}
          createTimestamp={question.createTimestamp}
          tags={question.tags}
          owner={question.owner}
          title={question.title}
          answers={question.answers}
          key={question._id}
        />
      ))}
    </Flex>
  );
}
