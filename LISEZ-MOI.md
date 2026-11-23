# Portfolio de Minkoua Lissa Pierrot (React + Vite, formule Premium)

## Ajouter des projets au fur et à mesure
1. Mettre les images dans `public/images/` (JPG ou PNG, 1600 px de large conseillé).
2. Ouvrir `src/data.js`, trouver la liste `PROJETS` et ajouter `img: "/images/nom-du-fichier.jpg"` au projet concerné.
3. Pour un nouveau projet, copier un bloc existant et modifier : `cat`, `t` (titre FR/EN), `d` (résumé), `long` (description), `client`, `year`, `tools`, `deliv` (livrables).
4. Les catégories disponibles sont dans `T.fr` et `T.en` (`magazines`, `marques`, `publicite`, `reseaux`, `photovideo`, `interieur`).

Les 6 projets actuels sont déduits du CV : à remplacer par les vraies réalisations.

## Autres réglages
- Contacts (WhatsApp, e-mail, Facebook, Google Drive) : objet `CONTACT` à la fin de `src/data.js`. Le lien Google Drive est à tester.
- Textes (accroche, à propos, services) : objet `T` dans `src/data.js`.
- Remplacer `VOTRE-DOMAINE.com` dans `public/robots.txt` et `public/sitemap.xml`.

## Lancer en local
```
npm install
npm run dev
```

## Déployer sur Vercel
1. Mettre ce dossier dans un dépôt GitHub (sans `node_modules` ni `dist`, déjà exclus par `.gitignore`).
2. Sur vercel.com : Add New > Project > importer le dépôt > Deploy. Vercel détecte Vite tout seul.
3. Chaque modification poussée sur GitHub met le site à jour automatiquement.

## Nom de domaine
Vercel > Project > Settings > Domains > ajouter le domaine, puis copier les DNS chez le registrar.

## Google
Ajouter le site dans Google Search Console et envoyer `sitemap.xml`.
