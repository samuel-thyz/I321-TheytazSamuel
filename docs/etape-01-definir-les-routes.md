<!--
Fichier : docs/etape-01-definir-les-routes.md
Rôle : conception des routes de la ressource pizzas
Auteur : Samuel Theytaz
Date : 28.08.2026
-->

# Étape 01 - les routes

Les routes pour gérer la carte des pizzas. La pizza du moment, on verra plus tard.

- GET /pizzas -> liste des pizzas (200)
- GET /pizzas/{id} -> une pizza (200)
- POST /pizzas -> ajouter une pizza (201)
- PUT /pizzas/{id} -> modifier une pizza (200)
- DELETE /pizzas/{id} -> supprimer une pizza (204)

Pour le POST et le PUT on envoie title, image, ingredients et price.

Une pizza ressemble à ça :

```json
{
  "id": 1,
  "title": "Margherita",
  "image": null,
  "ingredients": ["Tomato", "Mozzarella", "Basil"],
  "price": 8.5
}
```
