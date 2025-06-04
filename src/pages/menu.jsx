import Link from 'next/link';
import MenuPreview from '../components/MenuPreview';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function Menu() {
  return (
    <main className={styles.mafiaBg}>
      <nav className={styles.stickyNav} aria-label="Main Navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
      </nav>
      <MenuPreview />
    </main>
  );
}
