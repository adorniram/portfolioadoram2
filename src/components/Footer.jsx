import { Heart, ChevronRight, MapPin, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-20 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mon Portfolio</h3>
                <p className="text-sm text-gray-400">Développeur Web</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Passionné par la création d'expériences web exceptionnelles et de solutions innovantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Accueil</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> À propos</a></li>
              <li><a href="#projets" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Projets</a></li>
              <li><a href="#competences" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Compétences</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+225 01 02 03 04 05</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@monportfolio.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Réseaux sociaux</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Connectons-nous et collaborons ensemble</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Mon Portfolio. Tous droits réservés. | Conçu avec passion et créativité
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;