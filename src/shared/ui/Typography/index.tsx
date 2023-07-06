import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Typograpghy.module.css';

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children?: ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  as: C = 'h1',
  variant,
  className,
  children,
}) => (
  <C
    className={classNames(
      styles.heading,
      styles[
        'heading_variant_' + (variant ? variant : typeof C === 'string' && C)
      ],
      className
    )}
  >
    {children}
  </C>
);
