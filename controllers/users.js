// Fichier : controllers/users.js
// Rôle : contrôleur de la ressource users
// Auteur : Samuel Theytaz
// Date : 28.08.2026

// Les utilisateurs sont définis directement ici
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// GET /api/users
exports.findAll = (req, res) => {
    res.status(200).json(users);
};
