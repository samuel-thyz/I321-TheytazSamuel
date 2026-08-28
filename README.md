<!--
Fichier : README.md
Rôle : présentation et prise en main du projet
Auteur : Samuel Theytaz
Date : 28.08.2026
-->

# I321 - API Foodtruck

Petite API Express pour gérer le foodtruck.

Pour lancer :

```bash
npm install
cp .env.example .env
npm start
```

Ça tourne sur http://localhost:3000.

Pour l'instant il y a :
- GET / qui renvoie un petit message
- GET /api/users qui renvoie la liste des users

Une route qui n'existe pas renvoie un 404.
