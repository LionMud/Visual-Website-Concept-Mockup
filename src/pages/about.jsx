import Link from 'next/link';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function About() {
  return (
    <main className={styles.mafiaBg}>
      <nav className={styles.stickyNav} aria-label="Main Navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/menu">Menu</Link>
      </nav>
      <section className={styles.creamSection + ' ' + styles.italianAccent} style={{textAlign: 'center'}}>
        <h1 className={styles.sectionTitle}>About The Pizza Mafia</h1>
        <p style={{maxWidth: 600, margin: '2rem auto', color: '#E50914', fontSize: '1.2rem'}}>
          Our story, our code, our family. The Pizza Mafia was born from late nights, louder laughs, and a love for NY-style pizza with Curaçao soul. We believe in honor, cheese-first, and serving every pie with respect.
        </p>
        <div style={{maxWidth: 700, margin: '2rem auto', textAlign: 'left', color: '#222', fontSize: '1.08rem', lineHeight: 1.7}}>
          <p><strong>Mafia & NY Pizza Visual Language</strong></p>
          <p>Classic Mafia Media Aesthetics: Mafia-themed media like <em>The Godfather</em>, <em>Goodfellas</em>, <em>The Sopranos</em>, and <em>Donnie Brasco</em> share a distinctive visual style. A dark, ominous color palette dominates – primarily black and white with strategic splashes of red and occasional gold accents. For example, <em>Goodfellas’</em> poster relies on stark black-and-white imagery to set a grim tone, and <em>The Godfather’s</em> iconic logo features a black background with white lettering and a puppet hand emblem. This puppet hand holding strings symbolizes manipulation and control by the Mafia Don. Such imagery conveys authority, secrecy, and power – black is elegant yet menacing, symbolizing luxury and mystique on one hand and death or “moral darkness” on the other. Deep shadows and high contrast lighting are heavily used, creating silhouettes and half-lit faces that evoke a sense of drama and suspense (think of Don Corleone sitting in a dim study or the silhouette of a fedora-wearing gangster).</p>
          <p>Typography in classic mob films skews traditional and bold. <em>Goodfellas</em> uses a serif typeface in its title – an old-fashioned font choice meant to evoke the traditionalism of the Mafia world. Serif fonts (often all-caps) appear on many mafia movie posters to suggest a sense of history and gravitas. In contrast, <em>The Sopranos</em> logo uses a chunky sans-serif with a pistol shape replacing the “r”, a clever typographic twist that became culturally iconic. Across the genre, iconography frequently includes guns, cigars, vintage cars, fedoras, and rose boutonnieres – visual shorthand for the mob life. Posters often show men in black suits, white shirts, and ties (e.g. the <em>Goodfellas</em> trio in suits) to signify the gangster’s uniform. Overall, the mafia visual language is dark, dramatic, and rich with symbolic imagery (puppet strings, silhouetted guns, blood-red roses) that instantly conveys secrecy and power.</p>
        </div>
      </section>
    </main>
  );
}
