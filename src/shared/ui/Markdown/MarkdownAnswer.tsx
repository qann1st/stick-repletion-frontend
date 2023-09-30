import { IAnswer } from '@shared/types';
import Markdown from 'markdown-to-jsx';
import { CodeBlock } from '../CodeBlock';

export const MarkdownAnswer = ({ answer }: { answer: IAnswer }) => (
  <Markdown
    options={{
      overrides: {
        code: { component: CodeBlock },
      },
    }}
  >
    {answer.answer}
  </Markdown>
);
