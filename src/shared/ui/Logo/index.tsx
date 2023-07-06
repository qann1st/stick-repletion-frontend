import Image from 'next/image';
import React from 'react';
import logo from '@/shared/images/logo.png';

export const Logo = () => (
  <Image width={36} height={36} alt="Логотип" src={logo} />
);
