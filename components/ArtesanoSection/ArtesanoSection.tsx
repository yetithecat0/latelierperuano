import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ArtesanoSection.module.css';

export default function ArtesanoSection() {
  const t = useTranslations('Artesano');

  return (
    <section className={styles.container} id="filosofia">
      <div className={styles.imageColumn}>
        <div className={styles.borderFrame}></div>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/artesano.png"
            alt="Portrait of Yonatan Torres at his workshop"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
        <div className={styles.signatureBadge}>Yonatan A. Torres</div>
      </div>
      
      <div className={styles.textColumn}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.divider}></div>
        
        <div className={styles.content}>
          <p><strong>{t('p1_bold')}</strong>{t('p1')}<strong>{t('p1_bold2')}</strong>{t('p1_end')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3_start')}<strong>{t('p3_bold')}</strong>{t('p3')}</p>
          <p>{t('p4')}</p>
        </div>
        
        <div className={styles.footerSignature}>
          <span>L´atelier Peruano</span>
        </div>
      </div>
    </section>
  );
}
