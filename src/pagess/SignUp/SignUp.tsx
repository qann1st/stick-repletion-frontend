'use client';
import { Auth } from '@features';
import { Button, Input } from '@nextui-org/react';
import { api } from '@shared/api';
import { useForm } from '@shared/hooks/useForm';
import { IState, useUserStore } from '@shared/store';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { values, errors, onChange, isValid } = useForm({
    username: '',
    email: '',
    password: '',
  });
  const router = useRouter();
  const user = useUserStore((state: IState) => state.user);
  const setAccessToken = useUserStore((state: IState) => state.setAccessToken);

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
      .then(res => {
        localStorage.setItem('token', res.accessToken);
        setAccessToken(res.accessToken);
      })
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
        noValidate
      >
        <Input
          value={values.username}
          isInvalid={!!errors.username}
          errorMessage={errors.username}
          onChange={onChange}
          placeholder="Введите свой никнейм"
          label="Никнейм"
          className="max-w-xs w-80"
          labelPlacement="outside"
          minLength={6}
          maxLength={32}
          required
          name="username"
          type="text"
        />
        <Input
          value={values.email}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
          onChange={onChange}
          placeholder="Введите свой E-mail"
          label="E-mail"
          className="max-w-xs w-80"
          labelPlacement="outside"
          minLength={6}
          maxLength={32}
          required
          name="email"
          type="email"
        />
        <Input
          value={values.password}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          onChange={onChange}
          placeholder="Введите свой пароль"
          label="Пароль"
          className="max-w-xs w-80"
          labelPlacement="outside"
          minLength={6}
          maxLength={32}
          required
          name="password"
          type="password"
        />
        <Button
          className="w-full"
          color={isValid ? 'primary' : 'default'}
          disabled={!isValid}
          type="submit"
        >
          {isLoading ? 'Загрузка...' : 'Создать аккаунт'}
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </Auth>
  );
};

export { SignUp };
