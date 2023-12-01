import { Header } from '@widgets';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import '@shared/lib/normalize.css';
import './globals.css';
import { Checker } from './Checker';
import Loading from './loading';
import { Metadata } from 'next';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'Stick Repletion',
  description: 'Stick Repletion - форум для программистов',
  openGraph: {
    locale: 'ru_RU',
    siteName: 'Stick Repletion',
    type: 'website',
    description: 'Stick Repletion - форум для программистов',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru">
    <head>
      <link rel="icon" href="/favicon/favicon.ico" />
    </head>
    <body className="dark text-foreground bg-background">
      <Checker>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="h-full flex justify-center flex-grow">
              {children}
            </main>
          </Suspense>
        </Providers>
      </Checker>
    </body>
  </html>
);

export default RootLayout;
