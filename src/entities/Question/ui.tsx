import { Flex, MyLink, Typography } from '@shared';
import comment from '@shared/images/comment.png';
import like from '@shared/images/heart.png';
import { IQuestion, Months } from '@shared/types';
import { Avatar } from '@shared/ui/Avatar';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Question.module.css';
import { Tag } from '@shared';

export const Question: FC<
  Pick<
    IQuestion,
    | '_id'
    | 'tags'
    | 'rating'
    | 'title'
    | 'createTimestamp'
    | 'owner'
    | 'answers'
  >
> = ({ _id, tags, title, owner, answers, rating, createTimestamp }) => {
  const date = new Date(createTimestamp);
  const rtf = `${date.getDate()} ${
    Months[date.getMonth() + 1]
  } ${date.getFullYear()} года, ${date.getHours()}:${
    date.getMinutes().toString().length === 1
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;

  return (
    <MyLink href={`/question/${_id}`}>
      <Flex className={styles.question} justify="space-between" as="article">
        <Flex direction="column" className={styles.left}>
          <h3 className={styles.heading}>{title}</h3>
          <Flex className={styles.left_bottom} align="center">
            <Tag tags={tags} />
            <MyLink className={styles.link} href={`/user/${owner._id}`}>
              {owner.username}
            </MyLink>
            <span className={styles.dot} />
            <Flex className={styles.icons}>
              <Image
                className={styles.ico}
                width={12}
                src={comment}
                alt="Комментарии"
              />
              <p className={styles.ico_text}>{answers ? answers.length : 0}</p>
            </Flex>
            <Flex className={styles.icons}>
              <Image className={styles.ico} width={12} src={like} alt="Лайки" />
              <p className={styles.ico_text}>{rating.length}</p>
            </Flex>
          </Flex>
        </Flex>
        <Flex align="center" className={styles.right}>
          <MyLink href={`/user/${owner._id}`}>
            <Avatar width={40} height={40} src={owner.avatar} />
          </MyLink>
          <Flex direction="column">
            <MyLink className={styles.right_link} href={`/user/${owner._id}`}>
              {owner.username}
            </MyLink>
            <p className={styles.right_time}>{rtf}</p>
          </Flex>
        </Flex>
      </Flex>
    </MyLink>
  );
};
