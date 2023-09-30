import styles from './Tag.module.css';

export const Tag = ({
  tags,
  isOne = true,
}: {
  tags: string[];
  isOne?: boolean;
}) => (
  <span className={styles.tag}>
    <p className={styles.tag_p}>{tags[0]}</p>
    <span className={styles.other_tags}>+{tags.length - 1}</span>
  </span>
);
