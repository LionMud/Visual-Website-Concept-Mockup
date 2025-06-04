import { useState } from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';

export default function TonyChatbot() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are Tony the Slice, a cheeky, wise-cracking pizza mascot with a New York mafia vibe. Answer as Tony.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    const res = await fetch('/.netlify/functions/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: newMessages.map(m => `${m.role === 'user' ? 'User' : 'Tony'}: ${m.content}`).join('\n') + '\nTony:',
        model: 'gpt-4o-mini'
      }),
    });
    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.result || data.error || 'No response' }]);
    setLoading(false);
  }

  return (
    <section className={"fadeInUp " + styles.mafiaSection} style={{background:'#181818',color:'#FFD700',padding:'2rem',borderRadius:'12px',margin:'2rem auto',maxWidth:600}}>
      <h3 className={styles.sectionTitle + ' goldGlow'}>Chat with Tony the Slice 🍕</h3>
      <div style={{minHeight:'120px',marginBottom:'1rem',background:'#fffbe6',color:'#222',padding:'1rem',borderRadius:'8px',maxHeight:'200px',overflowY:'auto'}}>
        {messages.filter(m => m.role !== 'system').map((m, i) => (
          <div key={i} style={{marginBottom:'0.5rem'}}>
            <strong>{m.role === 'user' ? 'You' : 'Tony'}:</strong> {m.content}
          </div>
        ))}
        {loading && <div><em>Tony is thinking...</em></div>}
      </div>
      <form onSubmit={sendMessage} style={{display:'flex',gap:'1rem'}}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Say hi to Tony..."
          style={{flex:1,padding:'0.7rem',borderRadius:'6px',border:'1.5px solid #FFD700',fontSize:'1rem'}}
        />
        <button type="submit" disabled={loading} className={styles.ctaBtn + ' goldGlow fadeInUp'}>
          Send
        </button>
      </form>
    </section>
  );
}
