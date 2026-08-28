// Fichier : app.js
// Rôle : configuration de l'application Express (middlewares, routes, erreurs)
// Auteur : Samuel Theytaz
// Date : 28.08.2026

const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

// Route racine : message de bienvenue pour vérifier que l'API répond
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// Ressource users
app.use('/api/users', usersRouter);

// Route inconnue -> 404, puis gestionnaire d'erreurs global
app.use(notFound);
app.use(errorHandler);

module.exports = app;
