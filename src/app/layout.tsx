import { Header } from '@/widgets/Header';
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
    <body className={inter.className}>
      <Suspense fallback={<Loading />}>
        <Checker>
          <div className="wrapper">
            <Header />
            {children}
          </div>
        </Checker>
      </Suspense>
    </body>
  </html>
);

export default RootLayout;
