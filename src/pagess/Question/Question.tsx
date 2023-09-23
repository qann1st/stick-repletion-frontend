'use client';

import { IQuestion, Months } from '@shared/types';
import { MarkdownJSX } from '@shared/ui/Markdown';
import styles from './Question.module.css';
import { Avatar } from '@shared/ui/Avatar';
import { Rating } from '../../features/Rating';
import { Link } from '@nextui-org/react';

const Question = ({ question }: { question: IQuestion }) => {
  const date = new Date(question.createTimestamp);
  const rtf = `${date.getDate()} ${
    Months[date.getMonth() + 1]
  } ${date.getFullYear()} года, ${date.getHours()}:${
    date.getMinutes().toString().length === 1
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;

  return (
    <section className="flex items-center">
      <div className={styles.links}>
        <Link href="/">Форум</Link>
        &nbsp;
        <p>/</p>
        &nbsp;
        <Link href="/">Вопросы</Link>
        &nbsp;
        <p>/</p>
        &nbsp;
        <Link href={question._id} className={styles.selectedLink}>
          {question.title}
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className={styles.title}>{question.title}</h2>
        <p className={styles.par}>
          Автор&nbsp;
          <Link href={`/user/${question.owner._id}`}>
            {question.owner.username}
          </Link>
          <span className={styles.dot} /> {rtf}
        </p>
      </div>
      <div className={styles.question}>
        <div className="flex flex-col justify-center">
          <Avatar
            username={question.owner.username}
            fontSize={33}
            width={66}
            height={66}
          />
          <Rating question={question} />
        </div>
        <div className="flex flex-col">
          <Link
            className={styles.username}
            href={`/user/${question.owner._id}`}
          >
            {question.owner.username}
          </Link>
          <MarkdownJSX question={question} />
          <div className={styles.line} />
          <p>{question.answers.length} комментариев</p>
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
};

export default Question;
