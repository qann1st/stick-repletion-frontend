import { Header } from '@/widgets/Header';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import '@/shared/lib/normalize.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stick Repletion',
  description: 'Stick Repletion - форум для программистов',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Header />
      </body>
    </html>
  );
}
