'use client';
import { stringToColor } from '@shared/hooks/useStringToColor';
import { IState, useUserStore } from '@shared/store';
import { FC } from 'react';
import styles from './Avatar.module.css';
import classNames from 'classnames';

interface AvatarProps {
  width?: number;
  height?: number;
  className?: string;
  username?: string;
  fontSize?: number;
}

export const Avatar: FC<AvatarProps> = ({
  width = 29,
  height = 29,
  className,
  username,
  fontSize,
}) => {
  const color = username && stringToColor(username);

  return (
    <div
      className={classNames(
        'flex justify-center items-center rounded-full',
        className
      )}
      style={{ backgroundColor: `${color}`, width, height }}
    >
      <p style={{ fontSize: fontSize + 'px' }}>{username?.slice(0, 1)}</p>
    </div>
  );
};
