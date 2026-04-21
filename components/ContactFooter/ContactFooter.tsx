'use client';

import Image from 'next/image';
import { Link, useRouter, usePathname } from '@/navigation';
import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: 'es' | 'fr' | 'en') => {
    router.replace(pathname, { locale });
  };
  return (
    <>
      {/* Contacto Section */}
      <section className={styles.contactSection} id="contacto">
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column: Contact Info */}
            <div className={styles.leftCol}>
              <div>
                <h2 className={styles.title}>
                  <Link 
                    href="https://maps.app.goo.gl/xuswX5P5AMQ2vGNg9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.titleLink}
                  >
                    Neuchâtel, Suiza
                  </Link>
                </h2>
                <p className={styles.description}>
                  Grand-Rue 32, 2034 Peseux<br />
                  Cada pieza es un diálogo entre mi herencia peruana y mi vida en las montañas suizas. Estaré encantado de escucharte.
                </p>
              </div>

              {/* Journey Illustration */}
              <div className={styles.journeyLine}>
                <div className={styles.journeyInner}>
                  <span>NORTE DEL PERÚ</span>
                  <div className={styles.journeyPath}>
                    <div className={styles.pathLine}></div>
                    <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                    <div className={styles.pathLine}></div>
                  </div>
                  <span>NEUCHÂTEL, SUIZA</span>
                </div>
              </div>

              {/* Buttons & Links */}
              <div className={styles.buttons}>
                <button className={styles.btnPrimary}>
                  <span className="material-symbols-outlined text-lg">chat</span> WHATSAPP DIRECTO
                </button>
                <button className={styles.btnOutline}>
                  <span className="material-symbols-outlined text-lg">mail</span> ENVIAR CORREO
                </button>
              </div>

              <div className={styles.social}>
                <Link 
                  href="https://www.instagram.com/latelierperuano" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  INSTAGRAM
                </Link>
                <Link 
                  href="https://www.facebook.com/latelierperuano" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  FACEBOOK
                </Link>
              </div>

              {/* Google Maps Embed */}
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.4357778949826!2d6.885669977051382!3d46.99144883020619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478df900b12ad7f7%3A0xc3f7a1a0b3f5c7b!2sGr.-Rue%2032%2C%202034%20Peseux%2C%20Suiza!5e0!3m2!1ses!2spe!4v1713657000000!5m2!1ses!2spe" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.rightCol}>
              <form>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="NOMBRE" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="EMAIL" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="ASUNTO" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="MENSAJE" className={styles.textareaField}></textarea>
                </div>
                <button type="button" className={styles.submitBtn}>
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerWrapper}`}>
          <div className={styles.footerLogo}>
            <Image 
              src="/brand/logo.png"
              alt="L'Atelier Peruano Logo"
              width={48}
              height={48}
              className={styles.footerLogoImg}
            />
            <h3 className={styles.footerBrand}>L'ATELIER PERUANO</h3>
            <p className={styles.footerSubBrand}>DE YONATAN TORRES</p>
          </div>

          <p className={styles.footerTagline}>Joyería Artesanal · Neuchâtel, Suiza</p>

          <div className={styles.footerNavAndLang}>
            <nav className={styles.footerNav}>
              <Link href="#home" className={styles.footerNavLink}>Home</Link>
              <Link href="#filosofia" className={styles.footerNavLink}>Filosofía</Link>
              <Link href="#catalog" className={styles.footerNavLink}>Catalogo</Link>
              <Link href="#litoterapia" className={styles.footerNavLink}>Litoterapia</Link>
              <Link href="#qas" className={styles.footerNavLink}>Q&A´s</Link>
              <Link href="#terminos" className={styles.footerNavLink}>Terminos</Link>
            </nav>
            
            <div className={styles.footerLang}>
              <button onClick={() => handleLanguageChange('es')}>ES</button>
              <span>|</span>
              <button onClick={() => handleLanguageChange('fr')}>FR</button>
              <span>|</span>
              <button onClick={() => handleLanguageChange('en')}>EN</button>
            </div>
          </div>



          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © 2026 L'Atelier Peruano · Web diseñada por <Link href="https://datawithia.com" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>DW - Automatizaciones</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
