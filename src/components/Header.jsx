import { useState, useEffect } from 'react';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';

function Header({ theme, toggleTheme }) {
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-800/80 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm py-4'}`}>
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

        <nav className={`${menuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-full left-0 lg:top-0 w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent shadow-lg lg:shadow-none flex-col lg:flex-row gap-1 lg:gap-8 p-6 lg:p-0 mt-2 lg:mt-0 rounded-b-2xl lg:rounded-none`}>
          <a href="#home" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">Accueil</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">À propos</a>
          <a href="#competences" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">Compétences</a>
          <a href="#projets" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">Projets</a>
          <a href="#parcours" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg">Parcours</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">Contact</a>
          {/* theme toggle */}
          <button
            onClick={() => { toggleTheme(); setMenuOpen(false); }}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;