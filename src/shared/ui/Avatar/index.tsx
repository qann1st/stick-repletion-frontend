'use client';
import { IState, useUserStore } from '@shared/store';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({
  width = 29,
  height = 29,
  className,
}) => {
  const user = useUserStore((state: IState) => state.user);

  return (
    user && (
      <Image
        className={styles.avatar}
        width={width}
        height={height}
        src={user.avatar}
        alt={user.username}
      />
    )
  );
};
