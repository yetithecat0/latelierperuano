'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ProductModal from '../ProductModal/ProductModal';
import styles from './Catalog.module.css';

interface CatalogItem {
  id: number;
  title: string;
  price: string;
  category: string;
  badge?: string;
  image?: string;
  icon?: string;
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 1,
    title: 'CHAKANA PLATA',
    price: 'CHF 240',
    category: 'AMULETOS',
    badge: 'Personalizable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYhHgqdsoi178A7kObz0PW4sVybLnk3p0AzMnR4cZZXyP6NyoBfoINKwsedefbJnW1KH7_3QwrGQx3JZF54Tq4-KfceMtSWQuX4OvJj0h36NmAhpieAMknK-BQX4DPfyziJ09knqmsgfjcDoa4jZqIPn5Gm221pbZL8fiHrh37FRy697sQPOmG8G2s9j2Ya2ZnBMRdi94LiFGO4BJSFbplcSndKG0NSEf5kBaFMCHEos1ZejUY3JmumkSN7sMmJZFvtCKgzsHp0l2H'
  },
  {
    id: 2,
    title: 'PUMA GUARDIÁN',
    price: 'CHF 320',
    category: 'AMULETOS',
    image: '/latelierperuano/images/puma.png'
  },
  {
    id: 3,
    title: 'CÓNDOR ANDINO',
    price: 'CHF 380',
    category: 'AMULETOS',
    image: '/latelierperuano/images/condor.png'
  },
  {
    id: 4,
    title: 'BRAZALETE INTI',
    price: 'CHF 450',
    category: 'PULSERAS',
    badge: 'Único',
    image: '/latelierperuano/images/brazalete_inti.png'
  },
  {
    id: 5,
    title: 'ANILLO ÁGUILA REAL',
    price: 'CHF 350',
    category: 'ANILLOS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3QY6I5Z8oR12rMg8sek4K_o8xnd8b4wW_cHoQjuPI3Ig4aPhfj0_5ICPpVns2npHygFrBgvCle7n6MaCPuSQ1Fy3MzYhQEWjpdPUzj6ELpK4YwKaf4CJdNIqD1MQadATh8Ben74KYHy1U2Czwu8KN8UHgT3r2-T6w0fFML5Jvhf83Vg_muoxd22kL0SpU3WpprxRa7eKrKry4tVTKv7MJ_g2M0OmxRZQF0StM6Q1eXAonoyOZ4tmmgeZCvDZZYu-3q3ol2IH1mH4p'
  },
  {
    id: 6,
    title: 'COLLAR DE LABRADORITA',
    price: 'CHF 290',
    category: 'AMULETOS',
    image: '/latelierperuano/images/products/collar_labradorita.png'
  },
  {
    id: 7,
    title: 'SERPIENTE AMARU',
    price: 'CHF 210',
    category: 'AMULETOS',
    image: '/latelierperuano/images/serpiente.png'
  },
  {
    id: 8,
    title: 'DIJE PLUMA SAGRADA',
    price: 'CHF 280',
    category: 'AMULETOS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARMbWGIuN9MRoHgx2Cc6alEpXk_qx_kQuapZIUDpJu4wpgwwJ72IMfr_AmR1aA2HmK43ivKnhbsTmAax-Nx1-068nYkLSpwlbQ0IPPOUD4FWp_-_SJC1XYU4ejcWyAFaxfxdCW73njH2wVwiFCdIgFup3fOdAleFZW-Mh6qeiEEsehrIfBzkupciJjRXjCfoX86E9Lel1xaxTHP98QkaQPg7ucjOThYXKRlnYTLPYQb_3pqom_d-oySk79Ezb5ridzs8eeDClHCFlT'
  },
  {
    id: 9,
    title: 'TOTEM LOBO ESTELAR',
    price: 'CHF 310',
    category: 'AMULETOS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_841PlnUejzAcYFyjkK6mmlXosK48Lu_1aZexTph4zd4lZh896TX_d6xKs8Uddtj0ofBTmOervQRVJKPWkF-0eIOFrcFMEEKPRnjf89B1-h8a-az9NWzoIGl_f23PMG8XKind9b_zC16FA9kPuSVFGdTz_aulrkFREYYavqSQMe6iJat3moPxdKT0MZdKI0uOlfEU7gI0uTkVz6rZsSoFoJOOfB-1uN_FwvwnihS3fvwCLApmYvw2BR10J56CEn7Z4uHIi7EuHC6q'
  },
  {
    id: 10,
    title: 'AMULETO DE PROTECCIÓN',
    price: 'CHF 340',
    category: 'AMULETOS',
    image: '/latelierperuano/images/amuleto.png'
  },
  {
    id: 11,
    title: 'ARETES LUNA CRECIENTE',
    price: 'CHF 190',
    category: 'PENDIENTES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDATSczgfFkptlRDxdGwIml25I4LlCuh5sYrFpNINeq1Hm_e05bqTtD3aVRB6EdpcDu2r1MT2-3jJ9P5Ye7EvqvcMY0HwpLbWAIyNnrFLYSyzddfN9WTEp1tYS_NcL8ZAM00ys2TD9p9_66QnR7ajIatcRNfuCBgQN_0pSxCTmsAAv6UndEHvimqMwS_Y405bjgD0PICP-KIXxUsz4TO4-S40ID7ilOP_2fz3LN-8iJsgZuw3_Cz0G6dh171_Zj7Zsv-p8fTzHkBwCR'
  },
  {
    id: 12,
    title: 'COLLAR CHAKANA GRANDE',
    price: 'CHF 580',
    category: 'AMULETOS',
    badge: 'Edición Limitada',
    image: '/latelierperuano/images/products/chakana_grande.png'
  }
];

const FILTERS = ['TODOS', 'AMULETOS', 'ANILLOS', 'PULSERAS', 'PENDIENTES'];

export default function Catalog() {
  const t = useTranslations('Catalog');
  const [activeFilter, setActiveFilter] = useState('TODOS');
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null);

  const filteredItems = activeFilter === 'TODOS' 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter(item => item.category === activeFilter);

  const handleProductClick = (item: CatalogItem) => {
    setSelectedProduct(item);
  };

  return (
    <section className={styles.section} id="catalog">
      <div className={styles.header}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.filters}>
          {FILTERS.map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className={styles.itemCard}
            onClick={() => handleProductClick(item)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              {item.badge && <span className={styles.badge}>{t(`badges.${item.badge}`)}</span>}
              <div className={styles.overlay}></div>
              
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <span className={`material-symbols-outlined ${styles.itemIcon}`}>
                  {item.icon}
                </span>
              )}
            </div>
            
            <div className={styles.textCenter}>
              <span className={styles.itemCategory}>{t(`filters.${item.category}`)}</span>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <p className={styles.itemPrice}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
