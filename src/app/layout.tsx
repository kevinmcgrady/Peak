import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter, Shadows_Into_Light } from 'next/font/google';
import type React from 'react';

import { Footer } from '~/components/site/Footer';
import { Navigation } from '~/components/site/Navigation';
import { cn } from '~/lib/utils';
import { TRPCProvider } from '~/providers/trpc.provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shadow',
});

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
    <TRPCProvider>
      <ClerkProvider>
        <html lang='en'>
          <body
            className={cn(
              inter.className,
              shadowsIntoLight.variable,
              'container',
            )}
          >
            <Navigation />
            <main className='my-4'>{children}</main>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </TRPCProvider>
  );
}
