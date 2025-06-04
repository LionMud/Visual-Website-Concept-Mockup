import styles from '../styles/PizzaMafiaHome.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© 2025 The Pizza Mafia. Family first. Always.</small>
      <span className={styles.easterEgg} tabIndex={0} title="There's mozzarella… and then there’s ours.">
        <span className={styles.easterEggText}>
          {"There's mozzarella… and then there’s "}
          <em>ours</em>
          {"."}
        </span>
      </span>
      <div className={styles.socialLinks}>
        {/* Social icons: facebook, instagram, whatsapp */}
      </div>
    </footer>
  );
}
