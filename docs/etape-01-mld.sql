-- Fichier : docs/etape-01-mld.sql
-- Rôle : MLD de la carte des pizzas (script SQL pour MySQL Workbench)
-- Auteur : Samuel Theytaz
-- Date : 28.08.2026

-- Pour visualiser le schéma dans Workbench : Database > Reverse Engineer, ou
-- File > New Model puis coller ce script

CREATE TABLE pizzas (
  title VARCHAR(50) NOT NULL,
  image VARCHAR(255),
  price DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (title)
);

CREATE TABLE ingredients (
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE contient (
  title VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (title, name),
  FOREIGN KEY (title) REFERENCES pizzas(title),
  FOREIGN KEY (name) REFERENCES ingredients(name)
);
