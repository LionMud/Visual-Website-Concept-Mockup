import styles from '../styles/PizzaMafiaHome.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img
        src="/images/mafia-mascot.png"
        alt="Don Pizza slice in fedora"
        className={styles.mascotHero}
      />
      <h1 className={styles.neonTitle}>Welcome to the Family.</h1>
      <p className={styles.subTitle}>
        NY-style pizza. Curaçao heart. Served with respect.
      </p>
      <button className={styles.ctaBtn}>View the Menu</button>
      <span className={styles.scrollArrow}>↓</span>
    </section>
  );
}
