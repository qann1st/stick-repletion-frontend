'use client';

import { Button, Card, Divider } from '@nextui-org/react';
import { api } from '@shared/api';
import comment from '@shared/images/comment.png';
import { IQuestion, Months } from '@shared/types';
import { Avatar } from '@shared/ui/Avatar';
import { MarkdownQuestion } from '@shared/ui/Markdown/MarkdownQuestion';
import { MyLink } from '@shared/ui/MyLink';
import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import { Answer } from '../../entities/Answer';
import { Rating } from '../../features/Rating';
import classNames from 'classnames';
import styles from './Question.module.css';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then(mod => mod.default),
  { ssr: false }
);

const Question = ({ question }: { question: IQuestion }) => {
  const date = new Date(question.createTimestamp);
  const [answerInputText, setAnswerInputText] = useState('');
  const [answers, setAnswers] = useState(question.answers);
  const [error, setError] = useState('');
  const rtf = `${date.getDate()} ${
    Months[date.getMonth() + 1]
  } ${date.getFullYear()} года, ${date.getHours()}:${
    date.getMinutes().toString().length === 1
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answerInputText.length > 20) {
      const answer = await api.createAnswer(question._id, answerInputText);
      setError('');
      setAnswerInputText('');
      setAnswers(prev => [...prev, answer]);
    } else {
      setError('Ответ должен составлять более 20 символов');
    }
  };

  return (
    <section className="flex flex-col items-center gap-5 max-w-5xl w-full">
      <Card className="flex w-full px-4 py-2">
        <h2>{question.title}</h2>
        <p className="flex items-center text-xs text-neutral-400">
          Автор&nbsp;
          <MyLink
            className="text-xs text-neutral-300"
            href={`/user/${question.owner._id}`}
          >
            {question.owner.username}
          </MyLink>
          <span className="w-0.5 h-0.5 bg-blue-600 inline-block rounded-full mx-1" />
          {rtf}
          <span className="w-0.5 h-0.5 bg-blue-600 inline-block rounded-full mx-1" />
          <div className={classNames(styles.ico, 'flex items-center')}>
            <Image width={12} src={comment} alt="Комментарии" />
            <p className="text-sm text-gray-400 pl-0.5">
              {answers ? answers.length : 0}
            </p>
          </div>
        </p>
      </Card>
      <Card className="flex p-3 w-full flex-col">
        <div
          className="flex flex-row pr-4 gap-3 
        sl:justify-between"
        >
          <Avatar
            username={question.owner.username}
            fontSize={33}
            width={66}
            height={66}
          />
          <Rating question={question} className="flex-row gap-3" />
        </div>
        <div className="flex flex-col w-full">
          <MyLink
            className="text-neutral-400 max-w-max"
            href={`/user/${question.owner._id}`}
          >
            {question.owner.username}
          </MyLink>
          <MarkdownQuestion question={question} />
          <Divider className="my-2" />
          <div className="flex flex-col gap-2">
            {answers.map(answer => (
              <Answer answer={answer} key={answer._id} />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <MDEditor
              previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
              value={answerInputText}
              onChange={(value = '') => {
                setAnswerInputText(value);
              }}
            />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <Button color="primary" type="submit">
              Опубликовать
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Question;
