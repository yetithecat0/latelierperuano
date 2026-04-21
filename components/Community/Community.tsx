import Image from 'next/image';
import styles from './Community.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    text: "La pieza que recibí no es solo joyería, se siente cargada de una energía especial. Puedo sentir el cuidado y el propósito de Yonatan en cada detalle.",
    author: "Lucía M.",
    location: "NEUCHÂTEL, SUIZA",
    avatar: "/images/community/community-1.png"
  },
  {
    id: 2,
    text: "El collar con piedra luna superó mis expectativas. La presentación en estuche artesanal hacen que sea una experiencia de unboxing mágica.",
    author: "Julien B.",
    location: "GINEBRA, SUIZA",
    avatar: "/images/community/community-2.png"
  },
  {
    id: 3,
    text: "Llevar el amuleto de labradorita me da una sensación de fuerza diaria. Es arte que se vive, no solo que se luce.",
    author: "Elena S.",
    location: "FRIBURGO, SUIZA",
    avatar: "/images/community/community-3.png"
  }
];

const IG_IMAGES = [
  "/images/community/community-1.png",
  "/images/community/community-2.png",
  "/images/community/community-3.png"
];

export default function Community() {
  return (
    <section className={styles.section} id="comunidad">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Voces de la Comunidad</h2>
          <div className={styles.stars}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
          </div>
        </div>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <span className={styles.quoteSymbol}>“</span>
              <p className={styles.quoteText}>"{t.text}"</p>
              <div className={styles.authorBox}>
                <div className={styles.authorAvatar}>
                  <Image 
                    src={t.avatar} 
                    alt={t.author} 
                    width={40} 
                    height={40} 
                    className={styles.avatarImg}
                  />
                </div>
                <div>
                  <p className={styles.authorName}>{t.author}</p>
                  <p className={styles.authorLocation}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      <div className={styles.instagramGrid}>
        {IG_IMAGES.map((src, idx) => (
          <div key={idx} className={styles.igImageWrapper}>
            <Image
              src={src}
              alt={`Instagram post ${idx + 1}`}
              fill
              className={styles.igImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </div>
        ))}
        </div>
    </section>
  );
}
