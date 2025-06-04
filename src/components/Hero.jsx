import styles from '../styles/PizzaMafiaHome.module.css';

export default function Hero() {
  return (
    <section className={styles.hero + ' ' + styles.parallaxBg + ' ' + styles.mafiaSection} id="hero">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(10,10,10,0.55)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
        className="fadeInUp"
      >
        <h1 className={styles.neonTitle + ' neonGlow'}>
          NEW YORKER'S PIZZA
        </h1>
        <h2 className={styles.goldGlow} style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, marginBottom: '1.5rem' }}>
          THE TASTE OF NEW YORK
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#fffbe6', fontWeight: 'bold', marginBottom: '2rem', textShadow: '1px 1px 0 #000' }}>
          Where NYC attitude meets Curaçao color. A slice you can’t refuse.
        </p>
        <button className={styles.ctaBtn + ' fadeInUp'} style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Order Now
        </button>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
