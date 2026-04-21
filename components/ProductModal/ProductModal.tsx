'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductModal.module.css';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image?: string;
  description?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className={styles.content}>
          <div className={styles.imageCol}>
            <div className={styles.imageContainer}>
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className={styles.noImage}>
                   <span className="material-symbols-outlined">inventory_2</span>
                </div>
              )}
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.header}>
              <span className={styles.category}>{product.category}</span>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.price}>{product.price}</p>
            </div>

            <div className={styles.description}>
              <p>
                {product.description || "Esta pieza excepcional ha sido forjada a mano por Yonatan Torres, utilizando plata 925 de la más alta pureza. Cada detalle refleja la cosmovisión andina y la precisión de la joyería artesanal contemporánea."}
              </p>
              <ul className={styles.features}>
                <li>Material: Plata 925 Certificada</li>
                <li>Técnica: Forjado a fuego y cincelado manual</li>
                <li>Origen: Neuchâtel, Suiza (Legado Peruano)</li>
              </ul>
            </div>

            <div className={styles.checkoutBox}>
              <h3 className={styles.checkoutTitle}>MÉTODO DE PAGO</h3>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentIcon}>VISA</div>
                <div className={styles.paymentIcon}>MASTERCARD</div>
                <div className={styles.paymentIcon}>TWINT</div>
                <div className={styles.paymentIcon}>PAYPAL</div>
              </div>
              <button className={styles.buyBtn} onClick={() => alert('Simulación: Redirigiendo a pasarela de pago segura...')}>
                CONTINUAR CON LA COMPRA
              </button>
              <p className={styles.secureNote}>
                <span className="material-symbols-outlined">lock</span> Pago 100% seguro y encriptado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
