import Image from 'next/image';
import React from 'react';
import logo from '@shared/images/logo.png';

export const Logo = ({ className }: { className?: string }) => (
  <Image
    className={className}
    width={36}
    height={36}
    alt="Логотип"
    src={logo}
  />
);
