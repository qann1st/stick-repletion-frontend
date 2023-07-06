import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { Logo } from '@/shared/ui/Logo';
import { Search } from '@/shared/ui/Search';
import { FC } from 'react';
import styles from './Header.module.css';
import { MyLink } from '@/shared/ui/Link';

export const Header: FC = () => (
  <header className={styles.header}>
    <Flex align="center" justify="space-around">
      <MyLink href="/">
        <Logo />
      </MyLink>
      <Search />
      <Flex className={styles.buttons}>
        <Button>Войти</Button>
        <Button variant="ghost">Создать аккаунт</Button>
      </Flex>
    </Flex>
  </header>
);
