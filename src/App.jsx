import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'
import Parcours from './pages/Parcours'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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

  return (
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slow-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Header />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <AboutSection />
          <InfoSection />
          <EventsSection />
          <Footer />
        </>
      )}
      
      {currentPage === 'parcours' && (
        <>
          <Parcours />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App