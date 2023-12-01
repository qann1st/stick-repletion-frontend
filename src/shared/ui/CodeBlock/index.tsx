import classNames from 'classnames';
import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeBlockProps {
  children: string;
  className: string;
}

export const CodeBlock: FC<ICodeBlockProps> = ({ children, className }) => (
  <SyntaxHighlighter
    className={classNames(className, 'rounded')}
    language={className?.split('-')[1]}
    showLineNumbers={true}
    style={darcula}
  >
    {children}
  </SyntaxHighlighter>
);
