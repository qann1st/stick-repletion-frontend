'use client';
import { api } from '@shared/api';
import { IState, useUserStore } from '@shared/store';
import { IAnswer, IQuestion } from '@shared/types';
import { Arrow } from '@shared/ui/Arrow';
import classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './Rating.module.css';

interface IRatingProps {
  question: IQuestion | IAnswer;
  className?: string;
  isAnswer?: boolean;
}

export const Rating: FC<IRatingProps> = ({ question, className, isAnswer }) => {
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
      if (isAnswer) {
        api
          .upAnswerRating(question._id)
          .then(rating => {
            console.log('add');
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
      } else {
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
    }
  };

  const cancelRating = () => {
    if (!isFetching && !isDisliked) {
      setIsFetching(true);
      setCurrentRating(prev => prev - 1);
      setIsLiked(false);
      setIsDisliked(true);
      if (isAnswer) {
        api
          .cancelAnswerRating(question._id)
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
      } else {
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
    }
  };

  return (
    <div className={classNames('flex items-center', className)}>
      <button
        className={classNames(styles.circle, isLiked && styles.hovered)}
        onClick={addRating}
        disabled={isLiked || !user ? true : false}
      >
        <Arrow />
      </button>
      <p className="font-semibold">{currentRating}</p>
      <button
        className={classNames(styles.circle, isDisliked && styles.hovered)}
        onClick={cancelRating}
        disabled={isDisliked || !user ? true : false}
      >
        <Arrow isBottom={true} />
      </button>
    </div>
  );
};
