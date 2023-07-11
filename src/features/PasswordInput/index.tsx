'use client';
import {
  FC,
  FormEventHandler,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
  useState,
} from 'react';
import styles from './PasswordInput.module.css';
import classNames from 'classnames';
import { Input } from '@shared';
import { Box } from '@shared';

interface PasswordInputProps {
  className?: string;
  children?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  value?: string;
  error?: string;
}

export const PasswordInput: FC<
  PasswordInputProps & HTMLProps<HTMLInputElement>
> = ({ className, children, onSubmit, value, error, ...rest }) => {
  const [isText, setIsText] = useState(false);

  return (
    <Box className={styles.wrapper}>
      <Input
        type={isText ? 'text' : 'password'}
        name="password"
        placeholder="Пароль"
        value={value}
        error={error}
        {...rest}
      />
      <button
        onClick={() => setIsText(prev => !prev)}
        className={styles.button}
        type="button"
      >
        <div
          className={classNames(isText ? styles.image_view : styles.image)}
        ></div>
      </button>
    </Box>
  );
};
