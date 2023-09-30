'use client';
import { Button, Flex, Logo, MyLink, SearchInput } from '@shared';
import { IState, useUserStore } from '@shared/store';
import { FC } from 'react';
import styles from './Header.module.css';
import { Avatar } from '@shared/ui/Avatar';

export const Header: FC = () => {
  const user = useUserStore((state: IState) => state.user);

  return (
    <Flex as="header" className={styles.header}>
      <Flex className={styles.wrapper} align="center" justify="space-between">
        <MyLink className={styles.logo} href="/">
          <Logo />
        </MyLink>
        <Flex className={styles.right}>
          <SearchInput />
          {user ? (
            <MyLink className={styles.profile_link} href={`/user/${user._id}`}>
              <Flex className={styles.profile}>
                <p className={styles.name}>{user.username}</p>
                <Avatar className={styles.avatar} />
              </Flex>
            </MyLink>
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
    </Flex>
  );
};
