'use client';
import { FC, HTMLProps, ReactNode } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';
import { Box } from '../Box';

interface InputProps {
  className?: string;
  children?: ReactNode;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
}

export const Input: FC<InputProps & HTMLProps<HTMLInputElement>> = ({
  className,
  children,
  placeholder,
  isValid,
  error,
  ...rest
}) => (
  <Box>
    <input
      placeholder={placeholder}
      className={classNames(styles.input, className)}
      {...rest}
    />
    <span className={classNames(styles.error, !isValid && styles.active)}>
      {error}
    </span>
  </Box>
);
