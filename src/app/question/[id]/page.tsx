import { IQuestion } from '@shared/types';
import { Metadata } from 'next';

interface QuestionProps {
  params: { id: string };
}

async function getData(id: string) {
  const res = await fetch(process.env.API_BASEURL + `questions/${id}`);

  return res.json();
}

export async function generateMetadata({
  params: { id },
}: QuestionProps): Promise<Metadata> {
  const question: IQuestion = await getData(id);

  return {
    title: `${question.title} | Stick Repletion`,
    description: `${question.problem}`,
  };
}

export default async function Question({ params: { id } }: QuestionProps) {
  const question: IQuestion = await getData(id);

  return (
    <>
      <h1>{question.title}</h1>
      <p>{question.owner.username}</p>
    </>
  );
}
