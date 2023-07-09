'use client';
import { Auth } from '@/features/Auth';
import { PasswordInput } from '@/features/PasswordInput';
import { api } from '@/shared/api';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { Input } from '@/shared/ui/Input';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import styles from './SignUp.module.css';
import { IState, useStore } from '@/shared/store';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    api
      .signUp({ username, email, password })
      .then(res => localStorage.setItem('token', res.accessToken))
      .then(() => {
        router.push('/');
      });
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
      >
        <Input
          onChange={e => setUsername(e.currentTarget.value)}
          type="text"
          name="username"
          placeholder="Никнейм"
          value={username}
        />
        <Input
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
        />
        <PasswordInput
          onChange={e => setPassword(e.currentTarget.value)}
          value={password}
        />
        <Button className={styles.button}>Создать аккаунт</Button>
      </Flex>
    </Auth>
  );
};
