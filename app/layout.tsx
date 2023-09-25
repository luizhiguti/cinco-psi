'use client';
import Navbar from '@/components/app/Navbar';
import { Providers } from '@/lib/providers/providers';
import type { Metadata } from 'next';
// import './globals.css';

export const metadata: Metadata = {
  title: 'Cinco Psi',
  description: 'Cinco Psi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
