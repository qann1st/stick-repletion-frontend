import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Typograpghy.module.css';

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export const Typography: FC<TypographyProps> = ({
  as: C = 'h1',
  variant = 'h3',
  className,
  children,
  style,
}) => (
  <C
    className={classNames(
      styles.typography,
      className,
      styles['typography_variant_' + variant]
    )}
    style={style}
  >
    {children}
  </C>
);
