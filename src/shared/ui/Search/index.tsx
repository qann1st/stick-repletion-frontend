'use client';
import { FC, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import styles from './Search.module.css';
import classNames from 'classnames';

interface SearchProps {
  className?: string;
  children?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Search: FC<SearchProps & HTMLAttributes<HTMLInputElement>> = ({
  className,
  children,
  onSubmit,
  ...rest
}) => (
  <form onSubmit={onSubmit}>
    <input
      placeholder="Поиск..."
      className={classNames(styles.search)}
      {...rest}
    />
  </form>
);
