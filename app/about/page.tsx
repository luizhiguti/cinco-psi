'use client';
import AboutUs from '@/components/about/AboutUs';
import Contacts from '@/components/about/Contacts';
import Principles from '@/components/about/Principles';
import Projects from '@/components/about/Projects';
import { AppContext } from '@/contexts/app.context';
import Flex from '@/lib/components/Flex';
import styles from '@/styles/about.module.scss';
import { useContext, useEffect, useRef } from 'react';

export default function _About() {
  const { currentSection } = useContext(AppContext);
  const aboutRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  function scrollIntoRef() {}

  useEffect(() => {
    // get the element by id and use scrollIntoView
    if (!currentSection) return;

    switch (currentSection) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'principles':
        principlesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contacts':
        contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }, [currentSection]);

  return (
    <main className={styles.about}>
      <Flex
        direction='column'
        justify='center'
        bg='surface'
        px={{ base: 0, md: 12 }}
      >
        <section id='about' ref={aboutRef}>
          <AboutUs />
        </section>
        <section id='principles' ref={principlesRef}>
          <Principles />
        </section>
        <section id='projects' ref={projectsRef}>
          <Projects />
        </section>
        <section id='contacts' ref={contactsRef}>
          <Contacts />
        </section>
      </Flex>
    </main>
  );
}
