import styles from '../styles/PizzaMafiaHome.module.css';

export default function OrderCTA() {
  return (
    <section className={styles.orderCta + ' fadeInUp'} id="order">
      <h2 className={styles.headline + ' neonGlow'}>Make Your Move</h2>
      <button className={styles.ctaBtn + ' neonGlow fadeInUp'}>Place an Order</button>
      <p className={styles.secondaryText}>
        We deliver. Fast. Like it’s personal.
      </p>
    </section>
  );
}
