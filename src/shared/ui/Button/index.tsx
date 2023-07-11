'use client';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLProps,
  ReactNode,
} from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: 'filled' | 'ghost';
}

export const Button: FC<
  ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ className, children, variant = 'filled', ...rest }) => (
  <button
    className={classNames(
      styles.button,
      variant === 'filled' && styles.button__filled,
      variant === 'ghost' && styles.button__ghost,
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
