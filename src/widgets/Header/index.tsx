'use client';

import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Logo } from '@shared';
import { api } from '@shared/api';
import { SearchIcon } from '@shared/images/SearchIcon';
import { useUserStore } from '@shared/store';
import { MyLink } from '@shared/ui/MyLink';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, FormEvent, useRef, useState } from 'react';
import UserLink from '../../features/UserLink';
import styles from './Header.module.css';

export const Header: FC = () => {
  const [user, setUser, setAccessToken] = useUserStore(state => [
    state.user,
    state.setUser,
    state.setAccessToken,
  ]);
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const search = useSearchParams().get('search');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      router.push(`/search?search=${searchRef.current.value}`);
    }
  };

  return (
    <Navbar
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <MyLink className={(styles.logo, 'sl:hidden sm:block')} href="/">
          <Logo />
        </MyLink>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <form onSubmit={handleSubmit}>
            <Input
              variant="bordered"
              type="search"
              placeholder="Поиск..."
              startContent={<SearchIcon />}
              defaultValue={search ?? ''}
              ref={searchRef}
            />
          </form>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sl:hidden sm:flex" justify="end">
        <NavbarItem>
          <UserLink />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="sl:hidden sm:hidden">
        <NavbarMenuItem>
          <MyLink
            onClick={() => setIsMenuOpen(false)}
            className="w-full"
            href="/"
            size="lg"
          >
            Главная страница
          </MyLink>
          {user && (
            <MyLink
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
              href={`/user/${user._id}`}
              size="lg"
            >
              Профиль
            </MyLink>
          )}
          <MyLink
            onClick={() => setIsMenuOpen(false)}
            className="w-full"
            href="/"
            color="danger"
            size="lg"
          >
            <button
              onClick={() => {
                localStorage.removeItem('token');
                router.push('/');
                setUser(null);
                setAccessToken('');
                api.setToken('');
              }}
            >
              Выйти
            </button>
          </MyLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
