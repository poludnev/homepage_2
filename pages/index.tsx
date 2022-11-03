import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman&apos;s Homepage</title>
        <meta name="description" content="Roman's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.h1}>timid steps</h1>
        <p className={styles.paragraph}>
          One old Chinese said, &quot;A journey of a thousand miles begins with
          a single step&quot;. My journey started some time ago with a timid
          step and there is no end in sight.
        </p>
      </main>
    </div>
  );
}
