'use client';

import React, { useEffect } from 'react';
import styles from './StoneModal.module.css';

export interface Stone {
  id: string;
  title: string;
  chakra: string;
  power: string;
  meaning: string;
  token: string;
  hardness?: string;
  sign?: string;
  benefits?: string[];
  warning?: string;
  care?: string;
  lore?: string;
}

interface StoneModalProps {
  stone: Stone | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StoneModal({ stone, isOpen, onClose }: StoneModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen || !stone) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Glow background de la piedra */}
        <div
          className={styles.glowBg}
          style={{ background: `radial-gradient(ellipse at top, ${stone.token}33 0%, transparent 70%)` }}
        />

        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className={styles.content}>
          {/* Orbe visual */}
          <div className={styles.orbSection}>
            <div
              className={styles.orb}
              style={{
                backgroundColor: stone.token,
                boxShadow: `0 0 60px ${stone.token}, 0 0 120px ${stone.token}66, inset 0 0 40px rgba(255,255,255,0.15)`
              }}
            />
            <span className={styles.chakraTag}>{stone.chakra}</span>
            <h2 className={styles.stoneName}>{stone.title}</h2>
            <p className={styles.stonePower}>{stone.power}</p>
          </div>

          {/* Info detallada */}
          <div className={styles.infoSection}>
            <div className={styles.meaningBlock}>
              <span className={styles.sectionLabel}>ESENCIA</span>
              <p className={styles.meaning}>"{stone.meaning}"</p>
            </div>

            {stone.lore && (
              <div className={styles.loreBlock}>
                <span className={styles.sectionLabel}>SABIDURÍA ANCESTRAL</span>
                <p className={styles.loreText}>{stone.lore}</p>
              </div>
            )}

            {stone.benefits && stone.benefits.length > 0 && (
              <div className={styles.benefitsBlock}>
                <span className={styles.sectionLabel}>PROPIEDADES</span>
                <ul className={styles.benefits}>
                  {stone.benefits.map((b, i) => (
                    <li key={i}>
                      <span
                        className={styles.dot}
                        style={{ backgroundColor: stone.token }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.metaRow}>
              {stone.hardness && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>DUREZA</span>
                  <span className={styles.metaValue}>{stone.hardness} Mohs</span>
                </div>
              )}
              {stone.sign && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>SIGNO</span>
                  <span className={styles.metaValue}>{stone.sign}</span>
                </div>
              )}
            </div>

            {stone.warning && (
              <div className={styles.warningBlock}>
                <span className="material-symbols-outlined">info</span>
                <p>{stone.warning}</p>
              </div>
            )}

            <div className={styles.careBlock}>
              <span className={styles.sectionLabel}>CUIDADO RECOMENDADO</span>
              <p className={styles.careText}>{stone.care || 'Limpiar con agua de sal marina. Recargar sobre drusa de amatista o bajo la luz de la luna llena.'}</p>
            </div>

            <button className={styles.ctaBtn} onClick={onClose}>
              VER PIEZAS CON {stone.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
