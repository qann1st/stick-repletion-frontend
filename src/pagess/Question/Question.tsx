import { Flex, MyLink, Typography } from '@shared';
import { IQuestion, Months } from '@shared/types';
import { MarkdownJSX } from '@shared/ui/Markdown';
import { Rating } from '../../features/Rating';
import styles from './Question.module.css';

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
    <Flex
      direction="column"
      as="section"
      className={styles.section}
      align="center"
    >
      <Flex direction="column" className={styles.top}>
        <Typography as="h1" variant="h2" className={styles.title}>
          {question.title}
        </Typography>
        <p className={styles.par}>
          Автор&nbsp;
          <MyLink href={`/user/${question.owner._id}`}>
            {question.owner.username}
          </MyLink>
          <span className={styles.dot} /> {rtf}
        </p>
      </Flex>
      <Flex className={styles.question}>
        <Rating rating={question.rating} id={question._id} />
        <MarkdownJSX question={question} />
      </Flex>
    </Flex>
  );
};

export default Question;
