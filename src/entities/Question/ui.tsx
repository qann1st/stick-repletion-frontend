import { Flex, MyLink, Typography } from '@shared';
import comment from '@shared/images/comment.png';
import like from '@shared/images/heart.png';
import Image from 'next/image';
import styles from './Question.module.css';
import { Avatar } from '@shared/ui/Avatar';

export const Question = () => (
  <MyLink href="#">
    <Flex className={styles.question} justify="space-between" as="article">
      <Flex direction="column" className={styles.left}>
        <Typography className={styles.heading} as="h3">
          Есть ли тут кто шарит за музыку?
        </Typography>
        <Flex className={styles.left_bottom} align="center">
          <MyLink className={styles.link} href="#">
            qann1st
          </MyLink>
          <span className={styles.dot} />
          <Flex className={styles.icons}>
            <Image
              className={styles.ico}
              width={12}
              src={comment}
              alt="Комментарии"
            />
            <p className={styles.ico_text}>3</p>
          </Flex>
          <Flex className={styles.icons}>
            <Image
              className={styles.ico}
              width={12}
              src={like}
              alt="Комментарии"
            />
            <p className={styles.ico_text}>3</p>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="center" className={styles.right}>
        <MyLink href="#">
          <Avatar width={40} height={40} />
        </MyLink>
        <Flex direction="column">
          <MyLink className={styles.right_link} href="#">
            user
          </MyLink>
          <p className={styles.right_time}>Только что</p>
        </Flex>
      </Flex>
    </Flex>
  </MyLink>
);
