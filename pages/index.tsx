/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useRef, useState, useEffect } from 'react';
import Parallax from 'parallax-js';

import { useTranslation } from 'react-i18next';

import { getRandomOfSix } from '../utils';
import styles from './index.module.scss';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Parallax(containerRef.current!, {
      originX: 0,
      originY: 0,
    });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(img/bg-pic-${getRandomOfSix()}.jpeg)`,
      }}
    >
      <div ref={containerRef} className={styles.background}>
        <img
          src={`img/bg-pic-${getRandomOfSix()}.jpeg`}
          data-depth="0.05"
          alt="some of background images"
        />
      </div>
      <Head>
        <title>Roman&apos;s Homepage</title>
        <meta name="description" content="Roman's Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={mainRef} className={styles.main}>
        <h1 aria-level={1} className={styles.h1}>
          {t('title')}
        </h1>
        <p className={styles.paragraph}>
          <span>{t('disclaimer.s1')}</span>
          <span>{t('disclaimer.s2')}</span>
        </p>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list_item}>
              <Link href="/blog" className={styles.navlink}>
                {t('mainNav.blog')}
              </Link>
            </li>
            <li className={styles.nav__list_item}>
              <Link href="/projects" className={styles.navlink}>
                {t('mainNav.projects')}
              </Link>
            </li>
            <li className={styles.nav__list_item}>
              <Link href="/cv" className={styles.navlink}>
                {t('mainNav.cv')}
              </Link>
            </li>
            <li className={styles.nav__list_item}>
              <Link href="/about" className={styles.navlink}>
                {t('mainNav.about')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.media}>
          <ul className={styles.media__list}>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-email"></use>
                </svg>
              </a>
            </li>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-insta-round"></use>
                </svg>
              </a>
            </li>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className={styles.media__list_item}>
              <a href="#" className={styles.media__list_link}>
                <svg className={styles.media__list_icon}>
                  <use xlinkHref="img/logos/sprite.svg#icon-github"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
