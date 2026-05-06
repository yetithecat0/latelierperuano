import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className={styles.heroSection} id="home">
      {/* Ghosted Background Isotipo */}
      <div className={styles.chakanaWrapper}>
        <div className={styles.isotipoGhostWrapper}>
          <Image 
            src="/latelierperuano/brand/logo.png"
            alt=""
            fill
            className={styles.isotipoGhost}
            priority
          />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>L'ATELIER PERUANO</h1>
        <div className={styles.subtitleGroup}>
          <p className={styles.authorName}>{t('by')} Yonatan A. Torres</p>
          <p className={styles.tagline}>{t('tagline')}</p>
        </div>
        
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
            {t('quote')}
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary}>{t('explore')}</button>
          <button className={styles.btnSecondary}>{t('history')}</button>
        </div>
      </div>
    </section>
  );
}
