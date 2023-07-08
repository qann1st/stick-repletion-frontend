'use client';
import {
  FC,
  FormEventHandler,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import styles from './PasswordInput.module.css';
import classNames from 'classnames';
import { Input } from '@/shared/ui/Input';
import { Box } from '@/shared/ui/Box';

interface PasswordInputProps {
  className?: string;
  children?: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  value?: string;
}

export const PasswordInput: FC<
  PasswordInputProps & HTMLAttributes<HTMLInputElement>
> = ({ className, children, onSubmit, value, ...rest }) => {
  const [isText, setIsText] = useState(false);

  return (
    <Box className={styles.wrapper}>
      <Input
        type={isText ? 'text' : 'password'}
        name="password"
        placeholder="Пароль"
        value={value}
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
