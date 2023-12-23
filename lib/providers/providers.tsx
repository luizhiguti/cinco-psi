'use client';
import { AppContext } from '@/contexts/app.context';
import { theme } from '@/lib/themes/main-theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState('');

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AppContext.Provider value={{ currentSection, setCurrentSection }}>
          {children}
        </AppContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
