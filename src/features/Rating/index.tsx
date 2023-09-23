'use client';
import { Flex } from '@shared';
import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { IQuestion } from '@shared/types';
import { Arrow } from '@shared/ui/Arrow';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './Rating.module.css';

interface IRatingProps {
  question: IQuestion;
}

export const Rating: FC<IRatingProps> = ({ question }) => {
  const user = useUserStore((state: IState) => state.user);

  const [currentRating, setCurrentRating] = useState(
    question.likes.length - question.dislikes.length
  );
  const [isFetching, setIsFetching] = useState(false);
  const [isLiked, setIsLiked] = useState(
    user && question.likes.includes(user._id)
  );
  const [isDisliked, setIsDisliked] = useState(
    user && question.dislikes.includes(user._id)
  );

  const addRating = () => {
    if (!isFetching && !isLiked) {
      setIsFetching(true);
      setCurrentRating(prev => prev + 1);
      setIsLiked(true);
      setIsDisliked(false);
      api
        .upRating(question._id)
        .then(rating => {
          setIsLiked(user && rating.likes.includes(user._id));
          setIsDisliked(user && rating.dislikes.includes(user._id));
          setCurrentRating(rating.rating);
        })
        .catch(err => {
          setCurrentRating(prev => prev - 1);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  };

  const cancelRating = () => {
    if (!isFetching && !isDisliked) {
      setIsFetching(true);
      setCurrentRating(prev => prev - 1);
      setIsLiked(false);
      setIsDisliked(true);
      api
        .cancelRating(question._id)
        .then(rating => {
          setIsLiked(user && rating.likes.includes(user._id));
          setIsDisliked(user && rating.dislikes.includes(user._id));
          setCurrentRating(rating.rating);
        })
        .catch(err => {
          setCurrentRating(prev => prev + 1);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  };

  return (
    <Flex direction="column" align="center" className={styles.rating}>
      <button
        className={classNames(styles.circle, isLiked && styles.hovered)}
        onClick={addRating}
        disabled={isLiked || !user ? true : false}
      >
        <Arrow />
      </button>
      <p className={styles.rating_text}>{currentRating}</p>
      <button
        className={classNames(styles.circle, isDisliked && styles.hovered)}
        onClick={cancelRating}
        disabled={isDisliked || !user ? true : false}
      >
        <Arrow isBottom={true} />
      </button>
    </Flex>
  );
};
