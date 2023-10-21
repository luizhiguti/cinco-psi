'use client';
import AboutUs from '@/components/about/AboutUs';
import Principles from '@/components/about/Principles';
import Box from '@/lib/components/Box';
import Flex from '@/lib/components/Flex';
import styles from '@/styles/page.module.css';
import { Spacer } from '@chakra-ui/react';

export default function _About() {
  return (
    <main>
      <Flex direction='column' justify='center' bg='surface' p={12}>
        <Box>
          <AboutUs />
        </Box>
        <Box mt={12}>
          <Principles />
        </Box>
      </Flex>
    </main>
  );
}
