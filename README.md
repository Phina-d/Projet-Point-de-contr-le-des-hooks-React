# 🎬 Application de Films React - Point de Contrôle Hooks & Routing

Ce projet est une **application de gestion de films** développée en **React**, dans le cadre d’un point de contrôle. Il permet d’afficher une liste de films, d’appliquer des filtres, d’ajouter ou supprimer des films, et de naviguer entre les différentes pages grâce à **React Router**.

 Imports des Bibliothèques externes

import React, { useState } from "react";
֎ React est la bibliothèque principale pour construire l’interface utilisateur.

֎ useState est un Hook permettant de gérer l’état local (ex : mode sombre, filtres, films, etc.).


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
֎ react-router-dom permet de gérer la navigation entre différentes pages (routes).

Router encapsule toute l’application pour activer le routage.

Routes contient les différentes Route (chemins vers des pages).

Route définit un composant à afficher selon le chemin d’URL (path).

import '@fortawesome/fontawesome-free/css/all.min.css';
֎ Font Awesome fournit des icônes vectorielles (ex : étoiles, boutons, icônes de réseaux sociaux…).

import 'bootstrap/dist/css/bootstrap.min.css';
֎ Bootstrap est une bibliothèque CSS qui fournit des classes de mise en page réactives et des composants (boutons, grilles, formulaires, etc.).

📁 Imports des fichiers internes (projet)

import moviesData from "./moviesData";
📄 Un fichier de données contenant la liste initiale des films, chacun avec un title, rating, description, trailerLink, etc.


import MovieList from "./components/MovieList";
֎ Composant qui affiche la liste de tous les films filtrés et triés.


import Filter from "./components/Filter";
🔍 Composant qui permet de filtrer les films par titre et note.


import AddMovie from "./components/AddMovie";
➕ Composant avec un formulaire pour ajouter un nouveau film dynamiquement.

import Sort from "./components/Sort";
🔃 Composant qui permet de trier les films par titre ou par note (ascendant / descendant).

import Navbar from "./components/Navbar";
📌 Composant d’en-tête contenant le titre du site, l'accueil, Films, contact et le bouton pour activer/désactiver le mode sombre.

import Footer from "./components/Footer";
📞 Composant de pied de page avec des liens ou informations (avec icônes Font Awesome).

import MovieDescription from "./components/MovieDescription";
🎬 Composant qui affiche la description détaillée d’un film et intègre la bande-annonce vidéo, accessible via une route dynamique (/movie/:id).

## 🚀 Fonctionnalités principales

- Affichage d’une **liste de films et séries**.
- Filtres dynamiques par **titre** et **note**.
- **Ajout de nouveaux films** via un formulaire.
- **Suppression** d’un film.
- **Tri** par titre ou note (ascendant ou descendant).
- **Mode sombre** activable.
- Chaque film possède :
  - Un **titre**
  - Une **note**
  - Une **description**
  - Un **lien de bande-annonce YouTube**
- **Navigation** entre :
  - La page d’accueil (`/`)
  - La page de **description du film** (`/movie/:id`)
- Bouton pour **revenir à l'accueil** depuis la page de description.

---

## 🧪 Instructions demandées dans le point de contrôle

Dans ce point de contrôle, nous allons utiliser l'application de film que nous avons créée dans le point de contrôle précédent et ensuite, nous utiliserons la bibliothèque de routeur pour acheminer nos vues.
Instructions
1.	Nous ajouterons des films à l’aide du formulaire sur le navigateur une description et le lien de la bande-annonce integré (lien vidéo intégré) au film objet .
2.	Chaque fois que je clique sur une fiche de film, cela m'amène à la description du film et à la page de la bande-annonce.
3.	Dans la page de description, je peux revenir à la page d'accueil.


---

## 📁 Structure des fichiers

src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Home.js
│   ├── Films.js
│   ├── MovieDescription.js
│   └── Contact.js
├── moviesData.js
├── App.js
└── index.js
├── public/
│ └── index.html
└── README.md

---

## 🛠️ Technologies utilisées

- React (useState, useEffect, props)

- React Router DOM (react-router-dom)

- Bootstrap pour le style

- Font Awesome pour les icônes

---

## ▶️ Démo de navigation

- Visiter `/` : affiche la liste de tous les films avec filtres et tris.
- Cliquer sur une carte de film : redirige vers `/movie/:id`.
- Cliquer sur "Retour à l'accueil" : revient à `/`.

---

