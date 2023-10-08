'use client';
import Footer from '@/components/app/Footer';
import Navbar from '@/components/app/Navbar';
import Grid, { GridItem } from '@/lib/components/Grid';
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
          <Grid
            templateAreas={'"navbar" "main" "footer"'}
            templateColumns={'1fr'}
            templateRows={'64px 1fr 144px'}
            minHeight='100vh'
          >
            <GridItem area='navbar'>
              <Navbar />
            </GridItem>
            <GridItem area='main' alignContent='center'>
              {children}
            </GridItem>
            <GridItem area='footer'>
              <Footer />
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
