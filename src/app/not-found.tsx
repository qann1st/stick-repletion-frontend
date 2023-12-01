import Link from 'next/link';

function NotFound() {
  return (
    <div>
      <h2>Упс, страница не найдена</h2>
      <Link href="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFound;
