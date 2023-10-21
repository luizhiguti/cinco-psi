'use client';
import Footer from '@/components/app/Footer';
import Navbar from '@/components/app/Navbar';
import SimpleGrid from '@/lib/components/SimpleGrid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SimpleGrid>
      <Navbar />
      {children}
      <Footer />
    </SimpleGrid>
  );
}
