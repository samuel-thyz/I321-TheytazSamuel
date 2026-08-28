<!--
Fichier : docs/etape-01-modele-de-donnees.md
Rôle : MCD et MLD de la ressource pizzas
Auteur : Samuel Theytaz
Date : 28.08.2026
-->

# Étape 01 - modèle de données

Une pizza a plusieurs ingrédients et un ingrédient peut être sur plusieurs
pizzas, donc du N-N.

Les schémas sont dans etape-01-mcd.puml et etape-01-mld.puml.

En gros :
- MCD : PIZZAS (title, image, price) et INGREDIENTS (name), reliés par "contient", (1,N) côté pizza et (0,N) côté ingrédient
- MLD : le N-N donne une table CONTIENT (#title, #name)

Le id de la pizza (celui du JSON) est ajouté quand on code.
