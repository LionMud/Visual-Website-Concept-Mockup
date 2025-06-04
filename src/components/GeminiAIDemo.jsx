import { useState } from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function GeminiAIDemo() {
  const [prompt, setPrompt] = useState('Suggest a creative pizza topping.');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const res = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResult(data.result || data.error || 'No response');
    setLoading(false);
  }

  return (
    <section className={"fadeInUp " + styles.mafiaSection} style={{background:'#0A0A0A',color:'#FFD700',padding:'2rem',borderRadius:'12px',margin:'2rem auto',maxWidth:600}}>
      <h3 className={styles.sectionTitle + ' goldGlow'}>AI Demo (Gemini)</h3>
      <form onSubmit={handleSubmit} style={{display:'flex',gap:'1rem',flexDirection:'column'}}>
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Ask Gemini anything..."
          style={{padding:'0.7rem',borderRadius:'6px',border:'1.5px solid #FFD700',fontSize:'1rem'}}
        />
        <button type="submit" disabled={loading} className={styles.ctaBtn + ' goldGlow fadeInUp'}>
          {loading ? 'Thinking...' : 'Ask Gemini'}
        </button>
      </form>
      {result && (
        <div style={{marginTop:'1.5rem',background:'#fffbe6',color:'#222',padding:'1rem',borderRadius:'8px'}}>
          <strong>Gemini says:</strong>
          <div style={{marginTop:'0.5rem',whiteSpace:'pre-line'}}>{result}</div>
        </div>
      )}
    </section>
  );
}
