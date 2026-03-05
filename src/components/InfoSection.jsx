import { Code2, Palette, Shield, ChevronRight, Briefcase, BookOpen, Award } from 'lucide-react';

// timeline cards copied from `Parcours.jsx`
const timelineData = [
  {
    logo: "data:image/png;base64,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",
    category: "FORMATION",
    title: "Licence 2 en Informatique (En cours)",
    organization: "Université Virtuelle de Côte d'Ivoire",
    description: "Formation  en Réseaux et Sécurité informatique.",
    skills: ["Programmation", "Bases de données", "Réseaux"],
    color: "text-blue-600",
    align: "left"
  },
  {
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    category: "CERTIFICATION",
    title: "Data Analytics ",
    organization: "Coursera",
    description: "Analyse de données pour la prise de décision.",
    skills: ["SQL", "Excel", "Tableau"],
    color: "text-blue-600",
    align: "right"
  },
  {
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    category: "CERTIFICATION",
    title: "Google Workspace",
    organization: "Coursera",
    description: "Formation sur les outils Google Workspace.",
    skills: ["Google Sheets","Google Docs", "Google Drive", "Google Meet", "Google Calendar", "Google Gmail","Google Chats"],
    color: "text-blue-600",
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
                  {item.logo ? (
                    <img src={item.logo} alt="logo" className="w-8 h-8 object-contain" />
                  ) : (
                    <item.icon className="w-5 h-5" />
                  )}
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