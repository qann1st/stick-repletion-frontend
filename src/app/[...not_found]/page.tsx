import { Flex, MyLink, Typography } from '@shared';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: `Ошибка 404 | Stick Repletion`,
  };
}

const NotFound = () => (
  <Flex
    justify="center"
    direction="column"
    align="center"
    className="not_found"
  >
    <Typography as="h1">Запрашиваемый ресурс не найден</Typography>
    <MyLink href="/">
      <Typography as="h3">Ссылка на главную страницу</Typography>
    </MyLink>
  </Flex>
);

export default NotFound;
