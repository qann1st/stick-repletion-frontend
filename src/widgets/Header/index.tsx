import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { MyLink } from '@/shared/ui/Link';
import { Logo } from '@/shared/ui/Logo';
import { FC } from 'react';
import styles from './Header.module.css';
import { SearchInput } from '@/shared/ui/SearchInput';

export const Header: FC = () => (
  <Flex
    as="header"
    className={styles.header}
    align="center"
    justify="space-around"
  >
    <MyLink href="/">
      <Logo className={styles.logo} />
    </MyLink>
    <SearchInput />
    <Flex className={styles.buttons}>
      <MyLink href="/signin">
        <Button>Войти</Button>
      </MyLink>
      <MyLink href="/signup">
        <Button variant="ghost">Создать аккаунт</Button>
      </MyLink>
    </Flex>
  </Flex>
);
