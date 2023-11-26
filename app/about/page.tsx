'use client';
import AboutUs from '@/components/about/AboutUs';
import Principles from '@/components/about/Principles';
import Projects from '@/components/about/Projects';
import Flex from '@/lib/components/Flex';
import styles from '@/styles/about.module.scss';

export default function _About() {
  return (
    <main className={styles.about}>
      <Flex direction='column' justify='center' bg='surface' px={12}>
        {/* <section id='about'>
          <AboutUs />
        </section>
        <section id='principles'>
          <Principles />
        </section> */}
        <section id='projects'>
          <Projects />
        </section>
      </Flex>
    </main>
  );
}
