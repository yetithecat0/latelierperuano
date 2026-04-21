'use client';

import Image from 'next/image';
import { Link, useRouter, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: 'es' | 'fr' | 'en') => {
    router.replace(pathname, { locale });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Brand Logo */}
        <div className={styles.brand}>
          <Image 
            src="/brand/logo.png"
            alt="L'Atelier Peruano Logo"
            width={32}
            height={32}
            className={styles.brandLogo}
          />
          <span className={styles.brandName}>L'ATELIER PERUANO</span>
        </div>

        {/* Navigation Links */}
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <Link href="#home" className={styles.activeLink}>{t('home')}</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#filosofia">{t('philosophy')}</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#catalog">{t('catalog')}</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#litoterapia">{t('litoterapia')}</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#comunidad">{t('community')}</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#contacto">{t('contact')}</Link>
          </li>
        </ul>

        {/* Trailing Actions */}
        <div className={styles.actions}>
          <div className={styles.languageSelect}>
            <button className={styles.languageBtn} onClick={() => handleLanguageChange('es')}>ES</button>
            <span>|</span>
            <button className={styles.languageBtn} onClick={() => handleLanguageChange('fr')}>FR</button>
            <span>|</span>
            <button className={styles.languageBtn} onClick={() => handleLanguageChange('en')}>EN</button>
          </div>
          <div className={styles.icons}>
            <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
            <span className={`material-symbols-outlined ${styles.icon}`}>shopping_cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
