'use client';
import AboutUs from '@/components/about/AboutUs';
import Contacts from '@/components/about/Contacts';
import Principles from '@/components/about/Principles';
import Projects from '@/components/about/Projects';
import { AppContext } from '@/contexts/app.context';
import Flex from '@/lib/components/Flex';
import styles from '@/styles/about.module.scss';
import { useContext, useEffect } from 'react';

export default function _About() {
  const { currentSection } = useContext(AppContext);

  useEffect(() => {
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(currentSection);
    console.log('useEffect', currentSection);
    console.log('useEffect', elem);
    elem?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <main className={styles.about}>
      <Flex
        direction='column'
        justify='center'
        bg='surface'
        px={{ base: 0, md: 12 }}
      >
        <section id='about'>
          <AboutUs />
        </section>
        <section id='principles'>
          <Principles />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contacts'>
          <Contacts />
        </section>
      </Flex>
    </main>
  );
}
