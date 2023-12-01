'use client';
import { Button } from '@nextui-org/button';
import { IState, useUserStore } from '@shared/store';
import { Avatar } from '@shared/ui/Avatar';
import { MyLink } from '@shared/ui/MyLink';

const UserLink = () => {
  const user = useUserStore((state: IState) => state.user);

  return user ? (
    <MyLink href={`/user/${user._id}`}>
      <div className="flex justify-center items-center gap-1">
        <p>{user.username}</p>
        <Avatar username={user.username} className="" fontSize={15} />
      </div>
    </MyLink>
  ) : (
    <div className="flex gap-1">
      <MyLink href="/signin">
        <Button color="primary">Войти</Button>
      </MyLink>
      <MyLink href="/signup">
        <Button variant="bordered">Создать аккаунт</Button>
      </MyLink>
    </div>
  );
};

export default UserLink;
