'use client';
import { Button } from '@nextui-org/button';
import { IState, useUserStore } from '@shared/store';
import { MyLink } from '@shared/ui';
import { Avatar } from '@shared/ui/Avatar';
import { useRouter } from 'next/navigation';

const UserLink = () => {
  const user = useUserStore((state: IState) => state.user);
  const router = useRouter();

  return user ? (
    <MyLink href={`/user/${user._id}`}>
      <div className="flex justify-center items-center gap-1">
        <p>{user.username}</p>
        <Avatar username={user.username} fontSize={15} />
      </div>
    </MyLink>
  ) : (
    <div className="flex gap-1">
      <Button onClick={() => router.push('/signin')} color="primary">
        Войти
      </Button>
      <Button onClick={() => router.push('/signupy')} variant="bordered">
        Создать аккаунт
      </Button>
    </div>
  );
};

export default UserLink;
