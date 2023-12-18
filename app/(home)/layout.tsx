'use client';
import Footer from '@/components/app/Footer';
import Navbar from '@/components/app/Navbar';
import Grid, { GridItem } from '@/lib/components/Grid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      templateAreas={'"navbar" "main" "footer"'}
      templateColumns={'1fr'}
      templateRows={{ base: '64px 1fr auto', md: '64px 1fr 96px' }}
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
  );
}
