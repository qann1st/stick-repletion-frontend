import NextLink from 'next/link';
import { Link } from '@nextui-org/react';
import { FC, MouseEventHandler, ReactNode } from 'react';

interface IMyLinkProps {
  href: string;
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | undefined;
  color?:
    | 'foreground'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const MyLink: FC<IMyLinkProps> = ({
  href,
  children,
  className,
  size,
  color = 'foreground',
  onClick,
}) => (
  <Link
    color={color}
    className={className}
    as={NextLink}
    href={href}
    size={size}
    onClick={onClick}
  >
    {children}
  </Link>
);
