import Image from 'next/image';
import bottom from '../../images/bottom.png';
import top from '../../images/top.png';
import styles from './Arrow.module.css';

export const Arrow = ({
  isBottom,
  width = 18,
  height = 18,
}: {
  isBottom?: boolean;
  width?: number;
  height?: number;
}) => (
  <Image
    src={isBottom ? bottom : top}
    alt={`Стрелка ${isBottom ? 'вверх' : 'вниз'}`}
    className={styles.arrow}
    width={width}
    height={height}
  />
);
