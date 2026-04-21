'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Litoterapia.module.css';
import StoneModal, { Stone } from '../StoneModal/StoneModal';

const STONES: Stone[] = [
  {
    id: 'labradorita',
    title: 'LABRADORITA',
    chakra: 'TERCER OJO',
    power: 'Misticismo & Intuición',
    meaning: 'Despierta la magia interior y los talentos dormidos.',
    token: 'var(--stone-labradorita)',
    hardness: '6 – 6.5',
    sign: 'Escorpio',
    lore: 'Considerada la piedra del despertar místico, la Labradorita acompaña los momentos de cambio con protección y claridad. Su juego de luces —la labradorescencia— simboliza el velo entre los mundos visible e invisible.',
    benefits: [
      'Ayuda a navegar los cambios de vida con protección espiritual',
      'Potencia las capacidades intuitivas y psíquicas',
      'Recomendada para personas con bipolaridad o dislexia',
      'Conecta con planos superiores para buscar orientación espiritual',
    ],
    care: 'Limpiar con agua de sal marina. Recargar bajo la luna llena o sobre drusa de amatista.',
  },
  {
    id: 'lapis',
    title: 'LAPIS LÁZULI',
    chakra: 'TERCER OJO',
    power: 'Verdad & Comunicación',
    meaning: 'Fomenta la claridad mental y la expresión auténtica.',
    token: 'var(--stone-lapis)',
    hardness: '5 – 5.5',
    lore: 'Venerada por mesopotámicos y egipcios, fue usada en amuletos funerarios para proteger el alma. Los faraones la portaban como símbolo de sabiduría divina y paso al más allá.',
    benefits: [
      'Activa el Tercer Ojo (Ajna) — intuición y clarividencia',
      'Armoniza los planos físico, emocional, mental y espiritual',
      'Alivia el insomnio y dolores físicos',
      'Fomenta el desarrollo espiritual y la protección',
    ],
    care: 'Limpiar con agua y sal. Recargar al amanecer o sobre cuarzo blanco.',
  },
  {
    id: 'piedra-luna',
    title: 'PIEDRA LUNA',
    chakra: 'SACRO',
    power: 'Crecimiento & Equilibrio',
    meaning: 'Alquimia emocional y conexión con los ciclos lunares.',
    token: 'var(--stone-piedra-luna)',
    sign: 'Cáncer',
    lore: 'Fuente natural de potasio, la Piedra Luna irrisa como la propia luna. Es la piedra de los ciclos —del mar, de la mujer, del tiempo— y recarga sin riesgos de degradación bajo la luna llena.',
    benefits: [
      'Invoca el equilibrio emocional y la intuición femenina',
      'Útil en casos de dependencias, miedos y problemas digestivos',
      'Se recarga plenamente bajo la luz de la luna llena',
      'Apoya la duodenitis y el bienestar digestivo',
    ],
    care: 'Recargar exclusivamente bajo la luna llena. No exponer al sol directo por períodos prolongados.',
  },
  {
    id: 'amatista',
    title: 'AMATISTA',
    chakra: 'CORONA',
    power: 'Transmutación & Paz',
    meaning: 'Calma la mente y abre el camino a la espiritualidad.',
    token: 'var(--stone-amatista)',
    hardness: '7',
    sign: 'Acuario',
    lore: 'Variedad púrpura del cuarzo y tranquilizante natural por excelencia. Los griegos creían que protegía de la embriaguez; hoy se usa para superar dependencias y despertar los chakras superiores.',
    benefits: [
      'Activa el Tercer Ojo y el Chakra Corona',
      'Bloquea tensiones geopáticas y energías ambientales negativas',
      'Ayuda a vencer dependencias (alcohol, tabaco)',
      'Protege de pesadillas y potencia la memoria',
      'Tranquilizante natural que refuerza los dones psíquicos',
    ],
    care: 'Limpiar ahumando con salvia. Recargar sobre drusa de cuarzo o a la luz de la luna.',
  },
  {
    id: 'malaquita',
    title: 'MALAQUITA',
    chakra: 'CORAZÓN',
    power: 'Transformación & Protección',
    meaning: 'Limpia el aura y absorbe las energías negativas.',
    token: 'var(--stone-malaquita)',
    lore: 'Con su alto contenido de cobre, la Malaquita ha sido usada desde el Antiguo Egipto: su polvo se aplicaba en heridas para impedir infecciones. Hoy es la piedra del corazón sanado.',
    benefits: [
      'Alivia articulaciones y músculos doloridos',
      'Asociada al Chakra del Corazón (Anahata)',
      'Armoniza el tracto gastrointestinal, útil en gastritis y úlceras',
      'Símbolo de paz interior y expresión de sentimientos',
    ],
    warning: 'Uso externo únicamente. Debido a su contenido de cobre, nunca debe ingerirse en elixires por métodos directos.',
    care: 'Limpiar con paño seco o agua sin sal. Recargar sobre cuarzo transparente.',
  },
  {
    id: 'crisocola',
    title: 'CRISOCOLA',
    chakra: 'GARGANTA',
    power: 'Empoderamiento Femenino',
    meaning: 'Piedra de la ternura y la comunicación desde el alma.',
    token: 'var(--stone-crisocola)',
    lore: 'Compartida con las propiedades de la Atacamita, la Crisocola inspira nuevas perspectivas y estimula ideas innovadoras. Ideal para quienes inician nuevos proyectos o buscan expresar su verdad interior.',
    benefits: [
      'Inspira nuevas perspectivas al iniciar proyectos',
      'Estimula la claridad y la conexión espiritual',
      'Terapéuticamente indicada para el tratamiento de várices',
      'Potencia la comunicación auténtica y empoderada',
    ],
    care: 'Limpiar con agua de sal marina. Recargar bajo la luna o sobre cuarzo blanco.',
  },
];

export default function Litoterapia() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section} id="litoterapia">
      <div className={styles.backgroundOverlay}>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv8L5V2XOGgxSbBarakUH4HNrKVCcAYAXk_Oc0p6NXq-MpLP0DZeio4PLEWVfr8PrQwVw827ikgkBzaN_CcQmqEFSv0YYKs7rlkJhTptFjMsmS4Enst93OAE5ZYieBOPNThfn4N3bglI_O_l9i7VFuBmkd88N73flOd2XcWQ697-mgpiNYAryPdFcYIvOpT25HZ-rGDRfV9_mQcRiIehWvuwXGGJzO7zbJKQHmWNIHOZasGCkUWnPDSXiXCusOhYLg7b6I4vp6XVJh"
          alt="Gemstones collection"
          fill
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>EL PODER DE LA TIERRA</span>
          <h2 className={styles.title}>Litoterapia Sagrada</h2>
          <p className={styles.description}>
            Descubre la vibración única de cada piedra y cómo armonizan tu energía vital.
          </p>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={() => scroll('left')}
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className={styles.carousel} ref={scrollRef}>
          {STONES.map((stone) => (
            <div
              key={stone.id}
              className={styles.card}
              onClick={() => setSelectedStone(stone)}
              style={{ cursor: 'pointer' }}
              title={`Ver detalles de ${stone.title}`}
            >
              <div className={styles.cardGlow} style={{ backgroundColor: stone.token }}></div>

              <div
                className={styles.stoneOrb}
                style={{
                  backgroundColor: stone.token,
                  boxShadow: `0 0 40px ${stone.token}`
                }}
              ></div>

              <span className={styles.cardChakra}>{stone.chakra}</span>
              <h3 className={styles.cardTitle}>{stone.title}</h3>
              <p className={styles.cardMeaning}>"{stone.meaning}"</p>

              <div className={styles.cardDivider}></div>

              <p className={styles.cardPower}>{stone.power}</p>

              {/* Hint visual */}
              <span className={styles.cardHint}>TAP PARA MÁS →</span>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={() => scroll('right')}
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <StoneModal
        stone={selectedStone}
        isOpen={!!selectedStone}
        onClose={() => setSelectedStone(null)}
      />
    </section>
  );
}
