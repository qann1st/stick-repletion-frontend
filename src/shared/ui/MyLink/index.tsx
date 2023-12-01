import Link from 'next/link';
import { Link as UILink } from '@nextui-org/react';
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
  <UILink
    color={color}
    className={className}
    as={Link}
    href={href}
    size={size}
    onClick={onClick}
  >
    {children}
  </UILink>
);
