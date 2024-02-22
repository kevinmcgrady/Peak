import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

import { Footer } from '~/components/site/Footer';
import { Navigation } from '~/components/site/Navigation';
import { cn } from '~/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peak',
  description: 'Find your next getaway',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className)}>
        <Navigation />
        <main className='container my-4'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
