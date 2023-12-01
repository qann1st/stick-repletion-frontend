'use client';
import { NextUIProvider } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider className="min-h-screen flex flex-col" locale="ru-RU">
    {children}
  </NextUIProvider>
);
