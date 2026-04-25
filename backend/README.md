# Backend API - Portfolio Adoram

Documentation de l'API backend pour le portfolio.

## 🚀 Lancement du serveur

### Prérequis
- Node.js 18+
- MongoDB installé et démarré

### Installation
```bash
cd backend
npm install
```

### Configuration
1. Copiez `.env.example` en `.env`
2. Modifiez les valeurs si nécessaire (notamment `JWT_SECRET`)

### Démarrage
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

Le serveur démarre sur `http://localhost:3000`

---

## 📡 API REST

### Base URL
```
http://localhost:3000/api
```

### Authentification
La plupart des routes nécessitent un token JWT dans le header:
```
Authorization: Bearer <token>
```

---

## 🔐 Authentification

### Inscription
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "utilisateur",
  "email": "email@test.com",
  "password": "motdepasse123"
}
```

### Connexion
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "email@test.com",
  "password": "motdepasse123"
}
```

**Réponse:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "username": "utilisateur",
    "email": "email@test.com"
  }
}
```

### Profil utilisateur
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

---

## 💬 Messagerie

### Envoyer un message
```http
POST /api/messages
Authorization: Bearer <token>
Content-Type: application/json

{
  "recipientId": "id_du_destinataire",
  "content": "Bonjour!"
}
```

### Liste des messages reçus
```http
GET /api/messages/inbox
Authorization: Bearer <token>
```

### Liste des messages envoyés
```http
GET /api/messages/sent
Authorization: Bearer <token>
```

### Marquer comme lu
```http
PATCH /api/messages/:id/read
Authorization: Bearer <token>
```

---

## 📊 Statistiques

### Obtenir les statistiques
```http
GET /api/stats
Authorization: Bearer <token>
```

**Réponse:**
```json
{
  "totalVisits": 1250,
  "uniqueVisitors": 450,
  "todayVisits": 25,
  "viewsByDay": [
    { "date": "2024-01-01", "count": 50 },
    { "date": "2024-01-02", "count": 45 }
  ]
}
```

### Enregistrer une visite (côté frontend)
```javascript
// Depuis le frontend:
fetch('/api/stats/visit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
});
```

---

## 🛡️ Sécurité

### Mesures implémentées
- ✅ Authentification JWT
- ✅ Chiffrement bcrypt des mots de passe
- ✅ Protection XSS (sanitize-html)
- ✅ Rate limiting (limitation de requêtes)
- ✅ Helmet (headers HTTP sécurisés)
- ✅ Validation des entrées (express-validator)
- ✅ CORS configuré

### Pour HTTPS en production
Utilisez un reverse proxy comme Nginx ou un service comme Cloudflare.

---

## ✅ Tester l'API

### Avec curl
```bash
# Inscription
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","password":"test123"}'

# Connexion
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}'
```

### Avec Postman
1. Créez une collection
2. Ajoutez les endpoints ci-dessus
3. Utilisez les variables d'environnement pour le token