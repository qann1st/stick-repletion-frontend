import { Card, CardBody, CardHeader, Link } from '@nextui-org/react';
import { Tag } from '@shared';
import comment from '@shared/images/comment.png';
import like from '@shared/images/like.png';
import { IQuestion, Months } from '@shared/types';
import { Avatar } from '@shared/ui/Avatar';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Question.module.css';
import classNames from 'classnames';

export const Question: FC<
  Pick<
    IQuestion,
    | '_id'
    | 'tags'
    | 'likes'
    | 'dislikes'
    | 'title'
    | 'createTimestamp'
    | 'owner'
    | 'answers'
  >
> = ({
  _id,
  tags,
  title,
  owner,
  answers,
  likes,
  dislikes,
  createTimestamp,
}) => {
  const date = new Date(createTimestamp);
  const rtf = `${date.getDate()} ${
    Months[date.getMonth() + 1]
  } ${date.getFullYear()} года, ${date.getHours()}:${
    date.getMinutes().toString().length === 1
      ? '0' + date.getMinutes()
      : date.getMinutes()
  }`;

  return (
    <Link color="foreground" href={`/question/${_id}`}>
      <Card>
        <CardBody className="flex flex-row items-center gap-24">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold">{title}</h3>
            <div className="flex items-center gap-2">
              <Tag tags={tags} />
              <Link
                color="foreground"
                className="text-sm text-gray-400"
                href={`/user/${owner._id}`}
              >
                {owner.username}
              </Link>
              <span className={styles.dot} />
              <div className="flex items-center">
                <Image
                  className={styles.ico}
                  width={12}
                  src={comment}
                  alt="Комментарии"
                />
                <p className="text-sm text-gray-400 pl-0.5">
                  {answers ? answers.length : 0}
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  className={styles.ico}
                  width={12}
                  src={like}
                  alt="Лайки"
                />
                <p className="text-sm text-gray-400 pl-0.5">
                  {likes.length - dislikes.length}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Link color="foreground" href={`/user/${owner._id}`}>
              <Avatar
                width={40}
                height={40}
                fontSize={20}
                username={owner.username}
              />
            </Link>
            <div className="flex flex-col">
              <Link
                color="foreground"
                className="text-sm"
                href={`/user/${owner._id}`}
              >
                {owner.username}
              </Link>
              <p className="text-sm text-gray-400">{rtf}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
