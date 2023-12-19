import { Providers } from '@/lib/providers/providers';
import type { Metadata } from 'next';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: 'Cinco Psi',
  // description: 'Cinco Psi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
