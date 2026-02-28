#!/bin/bash

# Script d'installation automatique pour Grace Church
# Ce script crée automatiquement la structure du projet

echo "🏛️  Installation de Grace Church..."
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null
then
    echo "❌ Node.js n'est pas installé."
    echo "📥 Téléchargez-le sur : https://nodejs.org"
    exit 1
fi

echo "✅ Node.js est installé : $(node --version)"
echo ""

# Créer le projet avec Vite
echo "📦 Création du projet avec Vite..."
npm create vite@latest grace-church -- --template react

# Entrer dans le dossier
cd grace-church

# Installer les dépendances
echo ""
echo "📦 Installation des dépendances..."
npm install

# Installer Lucide React
echo ""
echo "🎨 Installation des icônes Lucide React..."
npm install lucide-react

# Créer le dossier components
echo ""
echo "📁 Création de la structure des dossiers..."
mkdir -p src/components

echo ""
echo "✅ Installation terminée !"
echo ""
echo "📝 PROCHAINES ÉTAPES :"
echo "1. Allez dans le dossier : cd grace-church"
echo "2. Créez les fichiers des composants dans src/components/"
echo "3. Copiez le code de chaque artifact"
echo "4. Lancez le projet : npm run dev"
echo ""
echo "🎉 Bon développement !"