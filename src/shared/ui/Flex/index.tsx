'use client';
import { FC, FormEventHandler, HTMLAttributes, ReactNode } from 'react';
import styles from './Search.module.css';
import classNames from 'classnames';

interface FlexProps {
  as?: keyof JSX.IntrinsicElements;
  align?: 'center';
  justify?: 'center' | 'space-between' | 'space-around';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wide?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Flex: FC<FlexProps> = ({
  as: C = 'div',
  align,
  justify,
  direction,
  wide,
  className,
  children,
  ...rest
}) => (
  <C
    className={classNames(
      styles.flex,
      align && styles['flex_align_' + align],
      justify && styles['flex_justify_' + justify],
      direction && styles['flex_direction_' + direction],
      wide && styles['flex_wide'],
      className
    )}
    {...rest}
  >
    {children}
  </C>
);
