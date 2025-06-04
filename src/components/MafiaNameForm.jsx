import { useState } from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function MafiaNameForm() {
  const [realName, setRealName] = useState('');
  const [mafiaName, setMafiaName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMafiaName('');
    setError('');
    try {
      const res = await fetch('/.netlify/functions/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Give me a fun, mafia-style nickname for someone named ${realName}, themed for a pizza shop in Curaçao. Make it local, cheeky, and memorable. Respond with only the nickname.`
        })
      });
      const data = await res.json();
      setMafiaName(data.result || 'Your mafia name: (error)');
    } catch (err) {
      setError('Sorry, something went wrong.');
    }
    setLoading(false);
  }

  return (
    <section className={styles.mafiaNameSection} id="mafia-name">
      <h2 className={styles.sectionTitle} style={{ color: '#e63946' }}>Create Your Mafia Name</h2>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Enter your name and get your custom Pizza Mafia nickname, powered by AI.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: 400, margin: 'auto' }}>
        <input
          name="realName"
          placeholder="Your real name"
          value={realName}
          onChange={e => setRealName(e.target.value)}
          required
          style={{ padding: '0.7rem 1.2rem', borderRadius: '1rem', border: '1px solid #e63946', fontSize: '1.1rem', width: '100%', maxWidth: 300 }}
        />
        <button type="submit" disabled={loading} style={{ background: '#e63946', color: '#fff', padding: '0.7rem 2rem', borderRadius: '2rem', fontSize: '1.1rem', fontFamily: 'Cinzel,serif', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px #e6394622' }}>
          {loading ? 'Generating...' : 'Get Mafia Name'}
        </button>
      </form>
      {mafiaName && <div style={{ marginTop: '1.2rem', fontSize: '1.2rem', color: '#e63946', fontFamily: 'Cinzel,serif' }}>{mafiaName}</div>}
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
    </section>
  );
}
