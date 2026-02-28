import { Code2, ChevronRight } from 'lucide-react';

function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              À propos de moi
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Etudiant réseaux et sécurité informatique 
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
             Étudiant en Réseau et Sécurité Informatique, je me forme aux fondamentaux des systèmes, des réseaux et de la cybersécurité. Mon parcours académique me permet d’acquérir une solide compréhension des infrastructures informatiques, de la sécurité des données et des bonnes pratiques de protection des systèmes. En parallèle, je travaille comme développeur web à temps partiel, ce qui me permet d’appliquer concrètement mes connaissances techniques.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Mon approche combine rigueur technique, créativité et attention aux détails pour livrer
              des produits qui dépassent les attentes. Je crois au code propre, à l'expérience utilisateur
              optimale et à l'apprentissage continu.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Technologies maîtrisées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </div>
            
            {/*  BOUTON CORRIGÉ */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
            >
              Discutons de votre projet
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-3xl blur-3xl opacity-30"></div>

            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" 
              alt="Développement web"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Philosophie</div>
                  <div className="text-sm text-gray-600">Travail & Créativité</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
