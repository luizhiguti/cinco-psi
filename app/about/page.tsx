'use client';
import AboutUs from '@/components/about/AboutUs';
import Principles from '@/components/about/Principles';
import Box from '@/lib/components/Box';
import Flex from '@/lib/components/Flex';

export default function _About() {
  return (
    <main>
      <Flex direction='column' justify='center' bg='surface' p={12}>
        <Box>
          <AboutUs />
        </Box>
        <section id='principles'>
          <Box mt={12}>
            <Principles />
          </Box>
        </section>
      </Flex>
    </main>
  );
}
