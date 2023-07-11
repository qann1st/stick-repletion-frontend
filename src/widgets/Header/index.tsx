'use client';
import { IState, useStore } from '@shared/store';
import { SearchInput } from '@shared';
import { Button } from '@shared';
import { Flex } from '@shared';
import { MyLink } from '@shared';
import { Logo } from '@shared';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Header.module.css';

export const Header: FC = () => {
  const user = useStore((state: IState) => state.user);

  return (
    <Flex
      as="header"
      justify="space-between"
      className={styles.header}
      align="center"
    >
      <MyLink className={styles.logo} href="/">
        <Logo />
      </MyLink>
      <Flex className={styles.right}>
        <SearchInput />
        {user ? (
          <Flex className={styles.profile}>
            <p className={styles.name}>{user.username}</p>
            <Image
              className={styles.avatar}
              width={26}
              height={26}
              alt={user.username}
              src={user.avatar}
            />
          </Flex>
        ) : (
          <Flex className={styles.buttons}>
            <MyLink href="/signin">
              <Button>Войти</Button>
            </MyLink>
            <MyLink href="/signup">
              <Button variant="ghost">Создать аккаунт</Button>
            </MyLink>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
