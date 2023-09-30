import { IQuestion } from '@shared/types';
import Markdown from 'markdown-to-jsx';
import { CodeBlock } from '../CodeBlock';

export const MarkdownQuestion = ({ question }: { question: IQuestion }) => (
  <Markdown
    options={{
      overrides: {
        code: { component: CodeBlock },
      },
    }}
  >
    {question.problem + question.attemptsFix}
  </Markdown>
);
