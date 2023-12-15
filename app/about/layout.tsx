'use client';
import Footer from '@/components/app/Footer';
import Navbar from '@/components/app/Navbar';
import Box from '@/lib/components/Box';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
