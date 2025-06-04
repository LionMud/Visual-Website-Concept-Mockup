import React, { useState } from "react";
import styles from '../styles/PizzaMafiaHome.module.css';

const DalleImageDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setImageUrl("");
    try {
      const res = await fetch("/.netlify/functions/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-function-secret": process.env.REACT_APP_FUNCTION_SECRET || process.env.NETLIFY_FUNCTION_SECRET || ""
        },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      if (res.ok && data.url) {
        setImageUrl(data.url);
      } else {
        setError(data.error || "Failed to generate image.");
      }
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={"fadeInUp"} style={{ margin: '3rem auto', maxWidth: 600, background: '#181818', borderRadius: 12, boxShadow: '0 2px 12px #E5091440', padding: '2rem' }}>
      <h2 className={styles.sectionTitle + ' goldGlow'}>DALL·E Image Generator</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe your pizza or mafia scene..."
          style={{ flex: 1, borderRadius: 8, border: '1.5px solid #FFD700', padding: '0.7rem', fontSize: '1rem' }}
          required
        />
        <button type="submit" disabled={loading || !prompt} className={styles.ctaBtn + ' goldGlow fadeInUp'} style={{ minWidth: 120 }}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {imageUrl && (
        <div style={{ marginTop: 16 }}>
          <img src={imageUrl} alt="DALL·E result" style={{ maxWidth: "100%", borderRadius: 8, boxShadow: '0 2px 12px #FFD70099' }} />
        </div>
      )}
    </div>
  );
};

export default DalleImageDemo;
