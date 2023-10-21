'use client';
import Welcome from '@/components/home/Welcome';
import styles from '@/styles/page.module.css';

export default function _Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
