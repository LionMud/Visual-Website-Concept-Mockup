import styles from '../styles/PizzaMafiaHome.module.css';

export default function MascotReveal() {
  return (
    <section className={styles.mascotReveal + ' fadeInUp'} id="don">
      <img
        src="/images/mafia-mascot.png"
        alt="The Don"
        className={styles.mascotLarge}
      />
      <div className={styles.quote}>
        <h3 className={"goldGlow"}>Meet the Don.</h3>
        <blockquote>“We don't do pineapple. Capisce?”</blockquote>
      </div>
    </section>
  );
}
