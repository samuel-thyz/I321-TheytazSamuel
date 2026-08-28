// Fichier : middleware/errorHandler.js
// Rôle : gère les routes inconnues (404) et les erreurs globales de l'API
// Auteur : Samuel Theytaz
// Date : 28.08.2026

// Renvoyé quand aucune route ne correspond à la requête
function notFound(req, res, next) {
    res.status(404).json({ error: 'Resource not found' });
}

// Gestionnaire d'erreurs global : attrape ce qui est transmis via next(err)
function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
}

module.exports = { notFound, errorHandler };
