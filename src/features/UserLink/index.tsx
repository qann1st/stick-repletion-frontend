'use client';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/react';
import { IState, useUserStore } from '@shared/store';
import { Avatar } from '@shared/ui/Avatar';

const UserLink = () => {
  const user = useUserStore((state: IState) => state.user);

  return user ? (
    <Link color="foreground" className="" href={`/user/${user._id}`}>
      <div className="flex justify-center items-center gap-1">
        <p className="">{user.username}</p>
        <Avatar username={user.username} className="" fontSize={15} />
      </div>
    </Link>
  ) : (
    <div className="flex gap-1">
      <Link href="/signin">
        <Button color="primary">Войти</Button>
      </Link>
      <Link href="/signup">
        <Button variant="bordered">Создать аккаунт</Button>
      </Link>
    </div>
  );
};

export default UserLink;
