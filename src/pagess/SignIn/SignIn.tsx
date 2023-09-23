'use client';

import { Auth } from '@features';
import { api } from '@shared/api';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { IState, useUserStore } from '@shared/store';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import { useForm } from '@shared/hooks/useForm';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const user = useUserStore((state: IState) => state.user);
  const setAccessToken = useUserStore((state: IState) => state.setAccessToken);
  const { values, errors, onChange, isValid } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (user) {
      router.push('/');
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.signIn({
        email: values.email,
        password: values.password,
      });

      if (res) {
        localStorage.setItem('token', res.accessToken);
        setAccessToken(res.accessToken);
        router.push('/');
      }

      setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'Validation failed')
          setError('Не валидные данные для входа!');
        else if (err.message === 'Неверная почта или пароль')
          setError('Неверная почта или пароль!');
        else setError('Что-то пошло не так...');
      }
    }
    setIsLoading(false);
  };

  return (
    <Auth
      link={{ name: 'Регистрация', href: '/signup' }}
      heading="Войдите в свой аккаунт"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3"
        noValidate
      >
        <Input
          value={values.email}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Введите свой E-mail"
          label="E-mail"
          className="max-w-xs w-80"
          labelPlacement="outside"
          required
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
        <Button color="primary" className="w-full" type="submit">
          {isLoading ? 'Загрузка...' : 'Вход'}
        </Button>
        {error && <p color="red">{error}</p>}
      </form>
    </Auth>
  );
};

export default SignIn;
