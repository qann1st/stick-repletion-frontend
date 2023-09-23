'use client';
import { Logo } from '@shared';
import { FC, ReactNode } from 'react';
import { Link } from '@nextui-org/react';

type Link = { href: string; name: string };

interface AuthProps {
  link: Link;
  heading: string;
  children: ReactNode;
}

export const Auth: FC<AuthProps> = ({ link, heading, children }) => (
  <section className="flex min-h-full min-w-screen items-center">
    <div className="flex justify-center items-center flex-col w-xs h-96 px-6 gap-2">
      <div className="flex items-center flex-col">
        <Logo />
        <h4>{heading}</h4>
      </div>
      {children}
      <Link color="foreground" href={link.href}>
        {link.name}
      </Link>
    </div>
  </section>
);
