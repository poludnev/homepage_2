import { IComingSoonProps } from './ComingSoonProps';
import { useTranslation } from 'react-i18next';
import styles from './ComingSoon.module.scss';
import Link from 'next/link';
export const ComingSoon: React.FC<IComingSoonProps> = ({ pageName }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        {t('comingSoon.p1-1')} {pageName && <span>{pageName}</span>}{' '}
        {t('comingSoon.p1-2')}
      </p>
      <p className={styles.paragraph}>{t('comingSoon.p2-1')}</p>

      <Link href="/" className={styles.back}>
        &larr; Back Home
      </Link>
    </div>
  );
};
