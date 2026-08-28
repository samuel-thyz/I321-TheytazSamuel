// Fichier : server.js
// Rôle : point d'entrée, démarre le serveur de l'API Foodtruck
// Auteur : Samuel Theytaz
// Date : 28.08.2026

require('dotenv').config();

const app = require('./app');

// Le port est configurable via la variable d'environnement, sinon 3000 par défaut
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API Foodtruck à l'écoute sur http://localhost:${port}`);
});
