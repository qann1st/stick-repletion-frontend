import styles from './Tag.module.css';

export const Tag = ({
  tags,
  isOne = true,
}: {
  tags: string[];
  isOne?: boolean;
}) => (
  <span className="flex items-center justify-between r-l rounded bg-zinc-700">
    <p className="max-w-text-tag px-1 text-ellipsis whitespace-nowrap overflow-hidden m-0 text-xs">
      {tags[0]}
    </p>
    <span className="bg-zinc-800 p-0.5 rounded-r text-xs">
      +{tags.length - 1}
    </span>
  </span>
);
