'use client';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Box.module.css';

interface BoxProps {
  className?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Box: FC<BoxProps> = ({
  className,
  children,
  as: C = 'div',
  ...rest
}) => (
  <C {...rest} className={classNames(styles.box, className)}>
    {children}
  </C>
);
