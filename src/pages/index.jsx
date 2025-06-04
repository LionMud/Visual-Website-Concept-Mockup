import React from 'react';
import styles from '../styles/PizzaMafiaHome.module.css';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import StorySection from '../components/StorySection';
import OrderCTA from '../components/OrderCTA';
import MascotReveal from '../components/MascotReveal';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MafiaNameForm from '../components/MafiaNameForm';
import DalleImageDemo from '../components/DalleImageDemo';

export default function Home() {
  return (
    <div className={styles.mafiaBg}>
      {/* Sticky Mafia Nav */}
      <nav className={styles.stickyNav} aria-label="Main Navigation">
        <a href="#hero">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Mafia Name Generator (AI-powered, CEO Demo) */}
      <MafiaNameForm />

      {/* Menu Preview */}
      <MenuPreview />

      {/* Story/About Section */}
      <StorySection />

      {/* Sora/AI Image Generator Demo */}
      <DalleImageDemo />

      {/* Order CTA */}
      <OrderCTA />

      {/* Mascot/Easter Egg */}
      <MascotReveal />

      {/* Contact/Order Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
