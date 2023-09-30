import { Divider } from '@nextui-org/react';
import { IAnswer } from '@shared/types';
import { Avatar } from '@shared/ui/Avatar';
import { MarkdownAnswer } from '@shared/ui/Markdown/MarkdownAnswer';
import { MyLink } from '@shared/ui/MyLink';
import { FC } from 'react';
import { Rating } from '../../features/Rating';

interface IAnswerProps {
  answer: IAnswer;
}

export const Answer: FC<IAnswerProps> = ({ answer }) => (
  <>
    <div className="flex flex-col gap-1 w-full">
      <div className="flex gap-1 items-center justify-between">
        <div className="flex gap-1 items center">
          <Avatar username={answer.owner.username} fontSize={15} />
          <MyLink href={`/user/${answer.owner._id}`}>
            {answer.owner.username}
          </MyLink>
        </div>
        <Rating
          className="mr-3 flex-row gap-3"
          isAnswer={true}
          question={answer}
        />
      </div>
      <MarkdownAnswer answer={answer} />
    </div>
    <Divider />
  </>
);
