'use client';

import {
  Input,
  Link,
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
import { useUserStore } from '@shared/store';
import { FC, FormEvent, useRef } from 'react';
import UserLink from '../../features/UserLink';
import styles from './Header.module.css';
import { useRouter } from 'next/navigation';
import { SearchIcon } from '@shared/images/SearchIcon';

export const Header: FC = () => {
  const [user, setUser, setAccessToken] = useUserStore(state => [
    state.user,
    state.setUser,
    state.setAccessToken,
  ]);
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      router.push(`/search?search=${searchRef.current.value}`);
    }
  };

  return (
    <Navbar position="sticky">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Link className={(styles.logo, 'sl:hidden sm:block')} href="/">
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <form onSubmit={handleSubmit}>
            <Input
              variant="bordered"
              type="search"
              placeholder="Поиск..."
              startContent={<SearchIcon />}
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
          <Link className="w-full" color="foreground" href="/" size="lg">
            Главная страница
          </Link>
          {user && (
            <Link
              className="w-full"
              color="foreground"
              href={`/user/${user._id}`}
              size="lg"
            >
              Профиль
            </Link>
          )}
          <Link className="w-full" color="danger" size="lg">
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
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
