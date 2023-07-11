'use client';
import { Flex } from '@/shared/ui/Flex';
import { MyLink } from '@/shared/ui/Link';
import { Logo } from '@/shared/ui/Logo';
import { Typography } from '@/shared/ui/Typography';
import { FC, ReactNode } from 'react';
import styles from './Auth.module.css';

type Link = { href: string; name: string };

interface AuthProps {
  link: Link;
  heading: string;
  children: ReactNode;
}

export const Auth: FC<AuthProps> = ({ link, heading, children }) => (
  <Flex justify="center" align="center" className={styles.auth}>
    <Flex
      className={styles.wrapper}
      direction="column"
      justify="center"
      align="center"
    >
      <Flex className={styles.header} direction="column" align="center">
        <Logo />
        <Typography as="h1" variant="h4">
          {heading}
        </Typography>
      </Flex>
      {children}
      <MyLink href={link.href}>{link.name}</MyLink>
    </Flex>
  </Flex>
);
