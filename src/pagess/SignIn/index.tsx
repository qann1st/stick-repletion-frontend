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

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      .signIn({ email, password })

      .then(() => {
        router.push('/');
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
          {isLoading ? 'Загрузка...' : 'Вход'}
        </Button>
      </Flex>
    </Auth>
  );
};
