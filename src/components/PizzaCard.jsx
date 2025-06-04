import styles from '../styles/PizzaMafiaHome.module.css';

export default function PizzaCard({ title, image, description }) {
  return (
    <div className={styles.pizzaCard}>
      <img src={`/images/${image}`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
