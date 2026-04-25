import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Parcours from './pages/Parcours'
import ApiDemo from './components/ApiDemo'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  // initialize theme from localStorage or prefers-color-scheme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    } else {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mql.matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      
      // Liste des vraies "pages" (pas des sections à scroller)
      const pages = ['home', 'parcours'];
      
      if (pages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        // Si c'est une section (about, projets, contact, etc.), rester sur home
        setCurrentPage('home');
        // Le scroll vers la section se fera automatiquement grâce à scroll-behavior: smooth
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // when switching between home and parcours pages, reset scroll position
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // if we just switched to home because of a section hash (e.g. "competences"),
    // wait a tick for the content to render then scroll to the target element.
    const hash = window.location.hash.slice(1);
    if (currentPage === 'home' && hash && !['home', 'parcours'].includes(hash)) {
      // slight delay to allow DOM update
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [currentPage]);

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <InfoSection />
      <AboutSection />
      <EventsSection />
      <ApiDemo />
      <Footer />
    </div>
  );
}

export default App