'use client';

import { Button, Input } from '@nextui-org/react';
import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then(mod => mod.default),
  { ssr: false }
);

const NewQuestion = () => {
  const [title, setTitle] = useState('');
  const [attemptsFixInputText, setAttemptsFixInputText] = useState('');
  const [answerInputText, setAnswerInputText] = useState('');
  const [tags, setTags] = useState('');

  return (
    <section className="flex flex-col items-center gap-3 max-w-2xl w-full">
      <Input
        labelPlacement="outside"
        label="Заголовок"
        placeholder="Напишите заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="w-full">
        <label className="text-small font-medium text-foreground">
          Опишите свою проблему
        </label>
        <MDEditor
          previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
          value={answerInputText}
          onChange={(value = '') => {
            setAnswerInputText(value);
          }}
        />
      </div>
      <div className="w-full">
        <label className="text-small font-medium text-foreground">
          Опишите попытки исправить проблему
        </label>
        <MDEditor
          previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
          value={attemptsFixInputText}
          onChange={(value = '') => {
            setAttemptsFixInputText(value);
          }}
        />
      </div>
      <Input
        labelPlacement="outside"
        label="Теги (через пробел)"
        placeholder="Напишите теги"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <Button className="w-full" color="primary" type="submit">
        Опубликовать
      </Button>
    </section>
  );
};

export { NewQuestion };
