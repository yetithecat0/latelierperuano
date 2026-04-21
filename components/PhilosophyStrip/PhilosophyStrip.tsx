import { useTranslations } from 'next-intl';
import styles from './PhilosophyStrip.module.css';

export default function PhilosophyStrip() {
  const t = useTranslations('PhilosophyStrip');

  return (
    <section className={styles.stripSection}>
      <div className={styles.pulseContainer}>
        <div className={styles.wordsContainer}>
          <span>{t('w1')}</span>
          <span className={`material-symbols-outlined ${styles.flare}`} style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
          <span>{t('w2')}</span>
          <span className={`material-symbols-outlined ${styles.flare}`} style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
          <span>{t('w3')}</span>
          <span className={`material-symbols-outlined ${styles.flare}`} style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
          <span>{t('w4')}</span>
          <span className={`material-symbols-outlined ${styles.flare}`} style={{ fontVariationSettings: '"FILL" 1' }}>flare</span>
          <span>{t('w5')}</span>
        </div>
      </div>
    </section>
  );
}
