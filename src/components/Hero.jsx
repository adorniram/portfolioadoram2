import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="accueil">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70 z-10"></div>

      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200" 
        alt="Hero Portfolio" 
        className="w-full h-full object-cover animate-slow-zoom"
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-5xl animate-fade-in-up">
          
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
            👋 Bienvenue sur mon portfolio
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Etudiant <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Réseaux & Sécurité Informatique
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#parcours"
              className="group px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Découvrir mes certifications
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 border-2 border-white/30 transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
