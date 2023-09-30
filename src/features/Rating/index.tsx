'use client';
import { Flex } from '@shared';
import { api } from '@shared/api';
import { IUser } from '@shared/types';
import { Arrow } from '@shared/ui/Arrow';
import { FC, useState } from 'react';
import styles from './Rating.module.css';

interface IRatingProps {
  rating: IUser[];
  id: string;
}

export const Rating: FC<IRatingProps> = ({ rating, id }) => {
  const [currentRating, setCurrentRating] = useState(rating.length);

  const addRating = () => {
    api.upRating(id).then(res => {
      setCurrentRating(res.rating.length);
    });
  };

  const downRating = () => {
    api.downRating(id).then(res => {
      setCurrentRating(res.rating.length);
    });
  };

  return (
    <Flex direction="column" align="center" className={styles.rating}>
      <div className={styles.circle} onClick={addRating}>
        <Arrow />
      </div>
      <p className={styles.rating_text}>{currentRating}</p>
      <div className={styles.circle} onClick={downRating}>
        <Arrow isBottom={true} />
      </div>
    </Flex>
  );
};
