import { IQuestion } from '@shared/types';
import { Metadata } from 'next';
import { QuestionPage } from '@pages';

interface QuestionProps {
  params: { id: string };
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:4000/questions/${id}`, {
    cache: 'no-cache',
  });
  const data = await res.json();
  return data;
}

export async function generateMetadata({
  params: { id },
}: QuestionProps): Promise<Metadata> {
  const question: IQuestion = await getData(id);

  return {
    title: `${question.title} | Stick Repletion`,
    description: `${question.problem}`,
    openGraph: {
      locale: 'ru_RU',
      siteName: 'Stick Repletion',
      type: 'article',
      title: question.title,
      description: 'Stick Repletion - форум для программистов',
    },
  };
}

export default async function Question({ params: { id } }: QuestionProps) {
  const question: IQuestion = await getData(id);

  return <QuestionPage question={question} />;
}
