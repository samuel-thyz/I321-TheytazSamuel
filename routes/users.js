// Fichier : routes/users.js
// Rôle : définit les routes de la ressource users
// Auteur : Samuel Theytaz
// Date : 28.08.2026

const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

router.get('/', users.findAll);

module.exports = router;
