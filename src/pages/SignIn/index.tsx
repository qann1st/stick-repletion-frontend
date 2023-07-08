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

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .signIn({ email, password })
      .then(res => localStorage.setItem('token', res.accessToken))
      .then(() => {
        router.push('/');
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
      >
        <Input
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
        />
        <PasswordInput
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <Button type="submit" className={styles.button}>
          Вход
        </Button>
      </Flex>
    </Auth>
  );
};
