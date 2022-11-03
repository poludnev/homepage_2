import Head from 'next/head';

import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman&apos;s Homepage</title>
        <meta name="description" content="Roman's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.h1}>{t('title')}</h1>
        <p className={styles.paragraph}>{t('disclaimer')}</p>
      </main>
    </div>
  );
}
