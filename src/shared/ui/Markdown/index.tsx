import Markdown from 'markdown-to-jsx';
import React from 'react';
import { CodeBlock } from '../CodeBlock';
import { IQuestion } from '@shared/types';

export const MarkdownJSX = ({ question }: { question: IQuestion }) => (
  <Markdown
    options={{
      overrides: {
        code: { component: CodeBlock },
        h1: { props: { className: 'h2' } },
        h2: { props: { className: 'h2' } },
        h3: { props: { className: 'h3' } },
        h4: { props: { className: 'h4' } },
      },
    }}
  >
    {question.problem + '<br />' + question.attemptsFix}
  </Markdown>
);
