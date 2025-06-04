import React, { useState } from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';

// Section data for the report (summarized for demo; you can expand as needed)
const reportSections = [
  {
    title: 'Mafia & NY Pizza Visual Language',
    icon: '🎩',
    summary: 'Explore the classic mafia movie style and iconic New York pizzeria branding. Learn how to blend dark, dramatic visuals with bold, simple color schemes for a unique pizza brand.',
    content: `Mafia-themed media like The Godfather, Goodfellas, and The Sopranos use dark palettes, bold typography, and iconic imagery (fedoras, puppet strings, red roses). NYC pizzerias favor bold, simple signage and a gritty, inviting vibe. Combine these for a brand that feels both classic and mysterious.`
  },
  {
    title: 'Brand Voice & Storytelling',
    icon: '🗣️',
    summary: 'Use playful mafia slang and storytelling to create a memorable brand voice. Engage customers with fun menu names, inside jokes, and interactive campaigns.',
    content: `Adopt mob slang ("fuhgeddaboudit", "capisce") and give menu items cheeky names. Share your origin story like a legend, and use social media for short, funny videos. Create a mascot and let each pizza have a backstory. Make customers feel like part of the family.`
  },
  {
    title: 'Modern Web Trends & UX',
    icon: '💻',
    summary: 'Modern restaurant sites are immersive, mobile-first, and interactive. Use bold images, micro-animations, and one-page storytelling for a cinematic experience.',
    content: `Use dark mode, neon glows, and high-contrast text. Add video backgrounds, micro-interactions (hover/fade effects), and parallax scrolling. Make the site fully responsive and accessible. Use collapsible sections, carousels, and sticky navigation for a fun, easy experience.`
  },
  {
    title: 'Accessibility & Best Practices',
    icon: '♿',
    summary: 'Ensure your site is usable by everyone. Use strong color contrast, resizable text, keyboard navigation, and ARIA labels.',
    content: `All text should be readable on dark backgrounds. Avoid overly decorative fonts for body text. Make sure all interactive elements are keyboard accessible and images have descriptive alt text.`
  }
];

export default function ReportViewer() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.mafiaSection} style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h1 className={styles.neonTitle + ' neonGlow'} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Pizza Mafia Curaçao – Deep Research Report
      </h1>
      {reportSections.map((section, idx) => (
        <div key={idx} className={styles.pizzaCard + ' fadeInUp'} style={{ marginBottom: '1.5rem', cursor: 'pointer' }}>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            tabIndex={0}
            role="button"
            aria-expanded={openIndex === idx}
            aria-controls={`section-content-${idx}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenIndex(openIndex === idx ? null : idx); }}
          >
            <span style={{ fontSize: '2rem' }}>{section.icon}</span>
            <h2 className={styles.sectionTitle + ' goldGlow'} style={{ flex: 1, margin: 0 }}>{section.title}</h2>
            <span style={{ fontSize: '1.5rem', color: '#FFD700' }}>{openIndex === idx ? '▲' : '▼'}</span>
          </div>
          <div style={{ color: '#FFD700', fontSize: '1.05rem', margin: '0.7rem 0 0.5rem 2.7rem' }}>{section.summary}</div>
          {openIndex === idx && (
            <div id={`section-content-${idx}`} style={{ marginTop: '1rem', color: '#fff', background: '#181818', borderRadius: 8, padding: '1.2rem', boxShadow: '0 2px 12px #E5091440' }}>
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
