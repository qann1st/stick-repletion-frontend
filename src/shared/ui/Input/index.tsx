'use client';
import { FC, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

interface InputProps {
  className?: string;
  children?: ReactNode;
  placeholder?: string;
}

export const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  className,
  children,
  placeholder,
  ...rest
}) => (
  <input
    placeholder={placeholder}
    className={classNames(styles.input)}
    {...rest}
  />
);