import { Header } from '@widgets';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import '@/shared/lib/normalize.css';
import './globals.css';
import { Checker } from './Checker';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stick Repletion',
  description: 'Stick Repletion - форум для программистов',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon/favicon.ico" />
    </head>
    <body className={inter.className}>
      <Checker>
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="main">{children}</main>
        </Suspense>
      </Checker>
    </body>
  </html>
);

export default RootLayout;
