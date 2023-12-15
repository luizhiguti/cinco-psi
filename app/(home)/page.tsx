'use client';
import Welcome from '@/components/home/Welcome';
import styles from '@/styles/home.module.scss';

export default function _Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
