import { Calendar, Clock, ChevronRight, ExternalLink, Github } from 'lucide-react';

function ProjectCard({ title, date, duration, description, image, category, demoLink, githubLink }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 px-4 py-1.5 bg-blue-500 text-white text-sm font-semibold rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <div className="flex gap-3">
          {demoLink && (
            <button className="flex-1 text-blue-600 font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all border border-blue-200 rounded-lg py-2 hover:bg-blue-50">
              Démo
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
          {githubLink && (
            <button className="flex-1 text-gray-700 font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all border border-gray-200 rounded-lg py-2 hover:bg-gray-50">
              Code
              <Github className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Plateforme E-commerce",
      date: "Septembre 2024",
      duration: "3 mois",
      description: "Application e-commerce complète avec panier, paiement en ligne et gestion des commandes. Interface moderne et responsive.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400",
      category: "Web App",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Dashboard Analytics",
      date: "Octobre 2024",
      duration: "2 mois",
      description: "Tableau de bord interactif pour visualiser des données en temps réel avec graphiques dynamiques et statistiques avancées.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      category: "Data Viz",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Application Mobile Fitness",
      date: "Novembre 2024",
      duration: "4 mois",
      description: "App mobile pour suivi d'entraînement et nutrition. Synchronisation cloud, notifications push et suivi de progression.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
      category: "Mobile",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50" id="projets">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Réalisations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">Projets Récents</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Une sélection de mes projets les plus récents et innovants</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all">
            Voir tous les projets
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;