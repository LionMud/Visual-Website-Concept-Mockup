import PizzaCard from './PizzaCard';
import styles from '../styles/PizzaMafiaHome.module.css';
// Import menu content as a JS array for easy updates
import menuItems from '../content/menu.json';

export default function MenuPreview() {
  return (
    <section className={styles.menuPreview + ' fadeInUp ' + styles.mafiaSection} id="menu">
      <h2 className={styles.sectionTitle + ' goldGlow'}>The Family Recipes</h2>
      <div className={styles.pizzaCards}>
        {menuItems.map((item, idx) => (
          <div className="fadeInUp" style={{ animationDelay: `${0.1 * idx + 0.2}s` }} key={idx}>
            <PizzaCard
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
// To update your menu, just edit src/content/menu.json
