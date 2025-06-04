import React from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';
import MenuPreview from '../components/MenuPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.mafiaBg}>
      {/* Sticky Mafia Nav */}
      <nav className={styles.stickyNav} aria-label="Main Navigation">
        <a href="#hero">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#order">Order</a>
        <a href="#location">Location</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero} style={{marginTop:'3rem', position:'relative'}}>
        <div className={styles.mascotCorner} title="Tony the Slice">🍕</div>
        <h1 className={styles.sectionTitle} style={{fontSize:'2.5rem', color:'#fff', textShadow:'2px 2px 0 #e63946'}}>Pizza Mafia Curaçao</h1>
        <h2 style={{color:'#e63946', fontFamily:'Impact, Arial Black, Arial, sans-serif', fontSize:'1.5rem'}}>"A slice you can’t refuse."</h2>
        <p style={{color:'#fffbe6', fontWeight:'bold', margin:'1rem 0'}}>Born in NYC. Reborn in Curaçao.</p>
        <div style={{margin:'1.5rem 0'}}>
          <span className={styles.mascotImg} style={{fontSize:'4rem', background:'#fffbe6', border:'3px solid #e63946', borderRadius:'50%', padding:'0.5em'}}>🍕</span>
        </div>
        <p style={{maxWidth:500, margin:'0 auto', color:'#fff', fontSize:'1.1rem'}}>Pizza Mafia is what happens when street-level NYC attitude meets island rhythm. It's not just food — it's a ritual, a badge, and a belonging system.</p>
      </section>

      {/* Menu Preview */}
      <section id="menu" className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>Menu Preview</h3>
        <ul style={{fontWeight:'bold', color:'#e63946', fontSize:'1.1rem'}}>
          <li>Classic NY Cheese</li>
          <li>Pepperoni Power</li>
          <li>Island Special</li>
          <li>Vegan Supreme</li>
        </ul>
        <div className="img-label" style={{color:'#222'}}>Food images or menu illustrations here</div>
      </section>

      {/* About/Brand Story */}
      <section id="about" className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>About the Brand / Story</h3>
        <p style={{fontWeight:'bold'}}>NY Pizza Curacao brings the grit, humor, and heart of NYC to the Caribbean. Our mascot, Tony the Slice, is always up for a laugh and a story. We’re bold, we’re local, and we don’t take ourselves too seriously—except when it comes to pizza.</p>
        <div className="img-label" style={{color:'#222'}}>Brand story visuals, references, or mascot art here</div>
      </section>

      {/* Order Now */}
      <section id="order" className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>Order Now</h3>
        <button className={styles.orderBtn} aria-label="Order Now">Order Now</button>
        <div className="img-label" style={{color:'#222'}}>Order button prominent, playful style</div>
      </section>

      {/* Location */}
      <section id="location" className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>Location / Our Story</h3>
        <p>📍 123 Main Street, Willemstad, Curaçao</p>
        <div className="img-label" style={{color:'#222'}}>Map or location image here</div>
      </section>

      {/* Mascot Easter Egg */}
      <section className={`${styles.sectionBlock} ${styles.easterEgg}`} tabIndex={0} aria-label="Tony the Slice Easter Egg" style={{cursor:'pointer'}} onClick={e => e.currentTarget.classList.toggle(styles.active)} onKeyDown={e => {if(e.key==='Enter'||e.key===' '){e.currentTarget.classList.toggle(styles.active);}}}>
        👋 “Yo! Don’t forget to try the Island Special!” – Tony the Slice
        <div className="img-label">Mascot shoutout / Easter egg</div>
        <div className={styles.easterEggReveal}>🍕 Pssst... Ask for the secret garlic crust! 🧄</div>
      </section>

      <Footer />
    </div>
  );
}
