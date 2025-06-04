import styles from '../styles/PizzaMafiaHome.module.css';
import about from '../content/sections/about.json';

export default function StorySection() {
  return (
    <section className={styles.storySection + ' fadeInUp'} id="story">
      <h2 className={styles.sectionTitle + ' goldGlow'}>{about.title}</h2>
      <div className={styles.storyGrid}>
        <div className={styles.storyText}>
          <p>{about.body}</p>
          {about.sources && about.sources.length > 0 && (
            <ul style={{marginTop: '1.5rem', fontSize: '0.95rem', color: '#FFD700'}}>
              {about.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.storyMascotSilhouette}>
          {about.images && about.images.length > 0 && (
            <img src={`/images/${about.images[0]}`} alt="About visual" />
          )}
        </div>
      </div>
    </section>
  );
}
