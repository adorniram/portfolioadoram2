import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Aké Aké Adoram</span>
            <p className="text-xs text-gray-500 -mt-1">Etudiant en Réseau et Sécurité informatique </p>
          </div>
        </div>
        
        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-blue-600" />}
        </button>

        <nav className={`${menuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full left-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none flex-col lg:flex-row gap-1 lg:gap-8 p-6 lg:p-0 mt-2 lg:mt-0 rounded-b-2xl lg:rounded-none`}>
          <a href="#home" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg">Accueil</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg">À propos</a>
          <a href="#competences" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg">Compétences</a>
          <a href="#projets" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg">Projets</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;