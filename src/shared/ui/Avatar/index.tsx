'use client';
import { IState, useUserStore } from '@shared/store';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Avatar.module.css';
import classNames from 'classnames';

interface AvatarProps {
  width?: number;
  height?: number;
  className?: string;
  src?: string;
}

export const Avatar: FC<AvatarProps> = ({
  width = 29,
  height = 29,
  className,
  src,
}) => {
  const user = useUserStore((state: IState) => state.user);

  return (
    <Image
      className={classNames(className, styles.avatar)}
      width={width}
      height={height}
      src={user ? user.avatar : src ? src : ''}
      alt={user ? user.username : 'Аватар пользователя'}
    />
  );
};
