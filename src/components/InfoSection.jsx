import { Code2, Palette, Shield, ChevronRight, Briefcase, BookOpen, Award } from 'lucide-react';

// timeline cards copied from `Parcours.jsx`
const timelineData = [
  {
    icon: BookOpen,
    category: "Formation",
    title: "Licence 2 en Réseau et Sécurité Informatique",
    organization: "Université Virtuelle de Côte d'Ivoire",
    description: "Développement d'applications web modernes avec React et Node.js.",
    skills: ["", "", ""],
    color: "text-blue-600",
    align: "left"
  },
  {
    icon: BookOpen,
    category: "Formation",
    title: "Licence en Informatique",
    organization: "Université Technologique",
    description: "Formation complète en développement logiciel.",
    skills: ["Programmation", "Bases de données", "Réseaux"],
    color: "text-cyan-600",
    align: "right"
  },
  {
    icon: BookOpen,
    category: "Projet Marquant",
    title: "Plateforme E-learning",
    organization: "Projet Personnel",
    description: "Plateforme interactive d'apprentissage.",
    skills: ["React", "API REST", "UX Design"],
    color: "text-indigo-600",
    align: "center"
  }
];

function InfoSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white" id="competences">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Mes compétences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Formations et Certifications
          </h2>
       
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {timelineData.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 h-full">
                <div className={`flex items-center gap-2 font-semibold mb-3 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                  {item.category}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.organization}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-sm px-3 py-1 rounded-full ${item.color.replace('text-', 'bg-').replace('-600', '-100')} ${item.color.replace('-600', '-700')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#parcours" className="text-white bg-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all px-8 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg">
            Voir plus
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;