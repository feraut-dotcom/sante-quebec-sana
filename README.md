# Le réseau, pour Sana

Petite app d'apprentissage sur le réseau de la santé et des services sociaux du Québec : 8 leçons, un lexique de 68 mots-clés (avec équivalents anglais), des cartes mémoire et des quiz.

Site 100 % statique (HTML, CSS, JavaScript), sans installation ni compilation.

## Contenu

- `data.js` : tout le contenu (leçons, lexique, questions). C'est le seul fichier à modifier pour mettre le contenu à jour.
- `app.js` : navigation, lexique, cartes, quiz et progression.
- `styles.css` : apparence (thème clair et sombre).

La progression et les meilleurs scores sont gardés dans le navigateur de l'utilisatrice (localStorage).

## Voir en local

Ouvrir `index.html` dans un navigateur, ou lancer `npx serve .` dans ce dossier.

## Publier sur Vercel

1. Sur [vercel.com](https://vercel.com), cliquer sur **Add New → Project**.
2. Importer ce dépôt GitHub.
3. Laisser « Framework Preset » sur **Other**, sans commande de build, puis cliquer sur **Deploy**.

Chaque `git push` sur la branche principale redéploie automatiquement le site.

Contenu à jour au 9 novembre 2026.
