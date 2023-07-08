'use client';
import classNames from 'classnames';
import { FC, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import styles from './Search.module.css';

interface SearchInputProps {
  className?: string;
  children?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const SearchInput: FC<
  SearchInputProps & HTMLAttributes<HTMLInputElement>
> = ({ className, children, onSubmit, ...rest }) => (
  <form onSubmit={onSubmit}>
    <input
      placeholder="Поиск..."
      className={classNames(styles.search)}
      {...rest}
    />
  </form>
);
