import PizzaCard from './PizzaCard';
import styles from '../styles/PizzaMafiaHome.module.css';
// Import menu content as a JS array for easy updates
import menuItems from '../content/menu.json';

export default function MenuPreview() {
  return (
    <section className={styles.menuPreview} id="menu">
      <h2 className={styles.sectionTitle}>The Family Recipes</h2>
      <div className={styles.pizzaCards}>
        {menuItems.map((item, idx) => (
          <PizzaCard
            key={idx}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
// To update your menu, just edit src/content/menu.json
