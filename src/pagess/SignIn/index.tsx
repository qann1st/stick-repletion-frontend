'use client';
import { Auth } from '@/features/Auth';
import { PasswordInput } from '@/features/PasswordInput';
import { api } from '@/shared/api';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { Input } from '@/shared/ui/Input';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import styles from './SignIn.module.css';
import { IState, useStore } from '@/shared/store';
import { useForm } from '@/shared/hooks/useForm';

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, errors, onChange, isValid } = useForm({
    email: '',
    password: '',
  });
  const router = useRouter();
  const user = useStore((state: IState) => state.user);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    api
      .signIn({ email: values.email, password: values.password })
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        if (err.message === 'Validation failed')
          setError('Не валидные данные для входа!');
        else if (err.message === 'Неверная почта или пароль')
          setError('Неверная почта или пароль!');
        else setError('Что-то пошло не так...');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Auth
      link={{ name: 'Регистрация', href: '/signup' }}
      heading="Войдите в свой аккаунт"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit}
        className={styles.form}
        direction="column"
        noValidate
      >
        <Input
          onChange={onChange}
          isValid={isValid}
          type="email"
          name="email"
          error={errors.email}
          placeholder="E-mail"
          required
          value={values.email}
        />
        <PasswordInput
          error={errors.password}
          value={values.password}
          minLength={6}
          maxLength={32}
          required
          onChange={onChange}
        />
        <Button disabled={!isValid} type="submit">
          {isLoading ? 'Загрузка...' : 'Вход'}
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </Flex>
    </Auth>
  );
};
