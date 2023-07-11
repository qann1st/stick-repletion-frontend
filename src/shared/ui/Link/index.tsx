import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { UrlObject } from 'url';
import styles from './Link.module.css';
import classNames from 'classnames';

interface LinkProps {
  href: string | UrlObject;
  className?: string;
  children?: ReactNode;
}

export const MyLink: FC<LinkProps> = ({
  href,
  className,
  children,
  ...rest
}) => (
  <Link href={href} className={classNames(className, styles.link)} {...rest}>
    {children}
  </Link>
);
