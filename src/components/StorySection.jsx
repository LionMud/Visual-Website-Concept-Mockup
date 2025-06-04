import styles from '../styles/PizzaMafiaHome.module.css';
import about from '../content/sections/about.json';

export default function StorySection() {
  return (
    <section className={styles.storySection + ' fadeInUp ' + styles.mafiaSection} id="story">
      <h2 className={styles.sectionTitle + ' goldGlow'}>{about.title}</h2>
      <div className={styles.storyGrid}>
        <div className={styles.storyText}>
          <p><strong>Our Vibe:</strong> A bold mafia-inspired look, dramatic colors, and a dash of New York attitude. We blend classic mob movie style with the warmth of a neighborhood pizza joint.</p>
          <p>Think: neon glows, vintage fonts, and a story in every slice. Want the full backstory? <a href="/about" style={{color:'#FFD700', textDecoration:'underline'}}>Read more about our roots</a>.</p>
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
