'use client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeBlock = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => (
  <SyntaxHighlighter
    className={className}
    showLineNumbers={true}
    style={atomOneDark}
  >
    {children}
  </SyntaxHighlighter>
);
