'use client';
import { Auth } from '@features';
import { PasswordInput } from '@features';
import { api } from '@shared/api';
import { Button } from '@shared/ui/Button';
import { Flex } from '@shared/ui/Flex';
import { Input } from '@shared/ui/Input';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import styles from './SignUp.module.css';
import { IState, useStore } from '@shared/store';
import { useForm } from '@shared/hooks/useForm';

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, errors, onChange, isValid } = useForm({
    username: '',
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
      .signUp({
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then(res => localStorage.setItem('token', res.accessToken))
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        if (err.message[0]) setError('Не валидные данные для регистрации!');
        else if (err.message === 'Неверная почта или пароль')
          setError('Неверная почта или пароль!');
        else setError('Что-то пошло не так...');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Auth
      link={{ name: 'Авторизация', href: '/signin' }}
      heading="Присоединиться к форуму"
    >
      <Flex
        onSubmit={handleSubmit}
        as="form"
        className={styles.form}
        direction="column"
        noValidate
      >
        <Input
          onChange={onChange}
          type="text"
          name="username"
          placeholder="Никнейм"
          required
          minLength={2}
          error={errors.username}
          value={values.username}
        />
        <Input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="E-mail"
          required
          error={errors.email}
          value={values.email}
        />
        <PasswordInput
          onChange={onChange}
          error={errors.password}
          value={values.password}
          minLength={6}
          required
        />
        <Button disabled={!isValid} type="submit">
          {isLoading ? 'Загрузка...' : 'Создать аккаунт'}
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </Flex>
    </Auth>
  );
};
