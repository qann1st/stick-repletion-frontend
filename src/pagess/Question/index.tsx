import dynamic from 'next/dynamic';
import Loading from '../../app/loading';
import { IQuestion } from '@shared/types';

const DynamicQuestion = dynamic(() => import('./Question'), {
  loading: () => <Loading />,
});

export const QuestionPage = ({ question }: { question: IQuestion }) => (
  <DynamicQuestion question={question} />
);
