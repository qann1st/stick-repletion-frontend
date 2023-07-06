import { Input } from '@/shared/ui/Input';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

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
        <Input placeholder="Логин" />
      </body>
    </html>
  );
}
