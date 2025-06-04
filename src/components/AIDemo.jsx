import { useState } from 'react';

export default function AIDemo() {
  const [prompt, setPrompt] = useState('write a haiku about pizza');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const res = await fetch('/.netlify/functions/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResult(data.result || data.error || 'No response');
    setLoading(false);
  }

  return (
    <section style={{background:'#181818',color:'#FFD700',padding:'2rem',borderRadius:'12px',margin:'2rem auto',maxWidth:600}}>
      <h3>AI Demo (OpenAI GPT-4o-mini)</h3>
      <form onSubmit={handleSubmit} style={{display:'flex',gap:'1rem',flexDirection:'column'}}>
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Ask the AI anything..."
          style={{padding:'0.7rem',borderRadius:'6px',border:'1.5px solid #e63946',fontSize:'1rem'}}
        />
        <button type="submit" disabled={loading} style={{background:'#e63946',color:'#fff',border:'none',padding:'0.8rem 1.5rem',borderRadius:'8px',fontWeight:'bold',fontSize:'1.1rem',cursor:'pointer'}}>
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>
      {result && (
        <div style={{marginTop:'1.5rem',background:'#fffbe6',color:'#222',padding:'1rem',borderRadius:'8px'}}>
          <strong>AI says:</strong>
          <div style={{marginTop:'0.5rem',whiteSpace:'pre-line'}}>{result}</div>
        </div>
      )}
    </section>
  );
}
