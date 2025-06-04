import { useState } from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('Thank you! We got your message.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section className={styles.contactSection + ' fadeInUp ' + styles.mafiaSection} id="contact">
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h3 className={styles.sectionTitle + ' goldGlow'}>Contact / Order</h3>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message or Order Details"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading} className={styles.ctaBtn + ' goldGlow fadeInUp'}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        {status && <div className={styles.formStatus}>{status}</div>}
      </form>
      <div className={styles.contactInfo}>
        <h3 className={styles.goldGlow}>The Hideout</h3>
        <p>📍 Willemstad, Curaçao</p>
        <p>📞 (599) 9-PIZZA-MAFIA</p>
        <p>✉️ orders@thepizzamafia.cw</p>
        <span className={styles.jokeTagline}>
          You didn’t find us. We found you.
        </span>
      </div>
    </section>
  );
}
