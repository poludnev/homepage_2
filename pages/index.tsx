import Head from 'next/head';
import { useEffect, useRef } from 'react';

import cn from 'classnames';

import { useTranslation } from 'react-i18next';

import { getRandomOfSix } from '../utils';
import styles from './index.module.scss';
import classNames from 'classnames';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/bg-pic-${getRandomOfSix()}.jpeg)`,
      }}
    >
      <Head>
        <title>Roman&apos;s Homepage</title>
        <meta name="description" content="Roman's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 aria-level={1} className={styles.h1}>
          {t('title')}
        </h1>
        <p className={styles.paragraph}>{t('disclaimer')}</p>
      </main>
    </div>
  );
}
