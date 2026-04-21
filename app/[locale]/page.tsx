import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import PhilosophyStrip from '@/components/PhilosophyStrip/PhilosophyStrip';
import ArtesanoSection from '@/components/ArtesanoSection/ArtesanoSection';
import NewArrivals from '@/components/NewArrivals/NewArrivals';
import Catalog from '@/components/Catalog/Catalog';
import Litoterapia from '@/components/Litoterapia/Litoterapia';
import Community from '@/components/Community/Community';
import ContactFooter from '@/components/ContactFooter/ContactFooter';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`parchment-texture ${styles.pageLayout}`}>
      <Navbar />
      <main>
        <Hero />
        <PhilosophyStrip />
        <ArtesanoSection />
        <NewArrivals />
        <Catalog />
        <Litoterapia />
        <Community />
      </main>
      <ContactFooter />
    </div>
  );
}
