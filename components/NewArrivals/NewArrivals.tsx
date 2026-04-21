'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ProductModal from '../ProductModal/ProductModal';
import styles from './NewArrivals.module.css';

interface NewArrivalItem {
  id: number;
  title: string;
  price: string;
  icon: string;
  image: string;
  padding: boolean;
  mixBlend?: boolean;
  iconColorTheme?: 'light' | 'dark';
}

const MOCK_ARRIVALS: NewArrivalItem[] = [
  {
    id: 1,
    title: 'PENDIENTE SOLIS',
    price: 'CHF 320',
    icon: 'diamond',
    image: '/images/products/launch-1.png',
    padding: false
  },
  {
    id: 2,
    title: 'ANILLO LUNAR',
    price: 'CHF 380',
    icon: 'brightness_7',
    image: '/images/products/launch-2.png',
    padding: false
  },
  {
    id: 3,
    title: 'COLLAR ANDINO',
    price: 'CHF 420',
    icon: 'auto_awesome',
    image: '/images/products/launch-3.png',
    padding: false
  },
  {
    id: 4,
    title: 'PULSERA INTU',
    price: 'CHF 290',
    icon: 'spa',
    image: '/images/products/launch-4.png',
    padding: false
  }
];

export default function NewArrivals() {
  const t = useTranslations('NewArrivals');
  const [selectedProduct, setSelectedProduct] = useState<NewArrivalItem & { category: string } | null>(null);

  const handleProductClick = (item: NewArrivalItem) => {
    setSelectedProduct({
      ...item,
      category: 'NUEVA CREACIÓN'
    });
  };

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>{t('label')}</span>
            <h2 className={styles.title}>{t('title')}</h2>
          </div>
          <Link href="#" className={styles.viewAll}>{t('viewAll')}</Link>
        </div>

        <div className={styles.carouselContainer}>
          {/* Primer track */}
          <div className={styles.carouselTrack}>
            {MOCK_ARRIVALS.map((item) => (
              <div 
                key={item.id} 
                className={styles.card}
                onClick={() => handleProductClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`${styles.imageWrapper} ${!item.padding ? styles.imageWrapperFull : ''}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`${item.padding ? styles.image : styles.imageFull}`}
                    style={{ mixBlendMode: item.mixBlend ? 'multiply' : 'normal' }}
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  <span 
                    className={`material-symbols-outlined ${styles.icon}`}
                    style={{ color: item.iconColorTheme === 'light' ? 'var(--text-light)' : undefined }}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardPrice}>{item.price}</p>
              </div>
            ))}
          </div>

          {/* Track duplicado para efecto infinito */}
          <div className={styles.carouselTrack} aria-hidden="true">
            {MOCK_ARRIVALS.map((item) => (
              <div 
                key={`dup-${item.id}`} 
                className={styles.card}
                onClick={() => handleProductClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`${styles.imageWrapper} ${!item.padding ? styles.imageWrapperFull : ''}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`${item.padding ? styles.image : styles.imageFull}`}
                    style={{ mixBlendMode: item.mixBlend ? 'multiply' : 'normal' }}
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  <span 
                    className={`material-symbols-outlined ${styles.icon}`}
                    style={{ color: item.iconColorTheme === 'light' ? 'var(--text-light)' : undefined }}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardPrice}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    <ProductModal 
      product={selectedProduct} 
      isOpen={!!selectedProduct} 
      onClose={() => setSelectedProduct(null)} 
    />
  </>
  );
}
