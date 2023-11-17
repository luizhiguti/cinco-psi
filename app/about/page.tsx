'use client';
import AboutUs from '@/components/about/AboutUs';
import Principles from '@/components/about/Principles';
import Team from '@/components/about/Team';
import Box from '@/lib/components/Box';
import Flex from '@/lib/components/Flex';
import styles from '@/styles/about.module.scss';

export default function _About() {
  return (
    <main className={styles.about}>
      <Flex direction='column' justify='center' bg='surface' px={12}>
        <section id='about'>
          <Box>
            <AboutUs />
          </Box>
        </section>
        <section id='principles'>
          <Box>
            <Principles />
          </Box>
        </section>
        <section id='team'>
          <Box flex={1}>
            <Team />
          </Box>
        </section>
      </Flex>
    </main>
  );
}
