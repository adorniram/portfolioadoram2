import { ChevronRight, Award, Briefcase, BookOpen, Code2, Download } from 'lucide-react';

/* ---------- SKILL CARD ---------- */
function SkillCard({ skill }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
        <Code2 className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  );
}

/* ---------- PARCOURS ---------- */
function Parcours() {
  const timelineData = [
    {
      icon: Briefcase,
      category: "Expérience Professionnelle",
      title: "Développeur Full Stack",
      organization: "Tech Company Inc.",
      description: "Développement d'applications web modernes avec React et Node.js.",
      skills: ["React", "Node.js", "MongoDB"],
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
      icon: Award,
      category: "Projet Marquant",
      title: "Plateforme E-learning",
      organization: "Projet Personnel",
      description: "Plateforme interactive d'apprentissage.",
      skills: ["React", "API REST", "UX Design"],
      color: "text-indigo-600",
      align: "center"
    }
  ];

  const skillsData = [
    { name: "React & JavaScript", description: "Interfaces modernes." },
    { name: "Node.js & Express", description: "API REST performantes." },
    { name: "Bases de données", description: "SQL & NoSQL." },
    { name: "UI/UX Design", description: "Figma & Tailwind." },
    { name: "Git & DevOps", description: "CI/CD." },
    { name: "Sécurité Web", description: "Bonnes pratiques." }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // chemin réel vers ton CV
    link.download = 'CV_Votre_Nom.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative">
        <div className="text-center px-6">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
            📚 Mon Parcours Professionnel
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Mon Parcours & <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Expériences
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            Une trajectoire riche faite d'apprentissages continus et de réalisations concrètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 border-2 border-white/30 transition-all"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </button>
          </div>
        </div>
        

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Mon histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Ma Trajectoire Professionnelle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les étapes clés qui ont façonné mon développement professionnel
            </p>
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
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Expertise technique
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Compétences Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un ensemble de compétences techniques et créatives pour des projets ambitieux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Intéressé par mon profil ?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Téléchargez mon CV ou contactez-moi pour discuter de vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              Télécharger mon CV
            </button>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/20 border border-white rounded-full text-white inline-flex items-center justify-center"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Parcours;