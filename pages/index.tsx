import Head from 'next/head';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman&apos;s Homepage</title>
        <meta name="description" content="Roman's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>timid steps</h1>
      </main>
    </div>
  );
}
