import Link from 'next/link';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function About() {
  return (
    <main className={styles.mafiaBg}>
      <nav className={styles.stickyNav} aria-label="Main Navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
      </nav>
      <section style={{padding: '4rem 0', textAlign: 'center'}}>
        <h1 className={styles.sectionTitle}>About The Pizza Mafia</h1>
        <p style={{maxWidth: 600, margin: '2rem auto', color: '#FFD700', fontSize: '1.2rem'}}>
          Our story, our code, our family. The Pizza Mafia was born from late nights, louder laughs, and a love for NY-style pizza with Curaçao soul. We believe in honor, cheese-first, and serving every pie with respect.
        </p>
      </section>
    </main>
  );
}
