# Portfolio de Minkoua Lissa Pierrot (React + Vite, formule Premium)

## Ajouter des projets au fur et à mesure
1. Mettre les images dans `public/images/` (JPG ou PNG, 1600 px de large conseillé).
2. Ouvrir `src/data.js`, trouver la liste `PROJETS` et ajouter `img: "/images/nom-du-fichier.jpg"` au projet concerné.
3. Pour un nouveau projet, copier un bloc existant et modifier : `cat`, `t` (titre FR/EN), `d` (résumé), `long` (description), `client` et `tools` (FR/EN), `year`, `deliv` (livrables), `motif` (illustration provisoire).
4. Les catégories disponibles sont dans `T.fr` et `T.en` (`magazines`, `marques`, `publicite`, `reseaux`, `photovideo`, `interieur`).

Les 6 projets actuels sont déduits du CV : à remplacer par les vraies réalisations.

## Pages du site
Accueil `/`, Réalisations `/realisations`, page projet `/realisations/1`, Services `/services`, À propos `/a-propos`, Contact `/contact`. Les illustrations et icônes sont des visuels provisoires dessinés en code (`src/Art.jsx`, `src/Icons.jsx`) : elles disparaissent d'un projet dès qu'on lui donne une vraie image avec `img`.

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

## Image de partage, FAQ, bouton WhatsApp
- Image de partage : `public/og.png` (1200x630). Les balises `og:image` et `twitter:image` de `index.html` pointent vers `https://VOTRE-DOMAINE.com/og.png` : remplacer par le vrai domaine (WhatsApp exige une adresse complète). Pour changer l'image, remplacer le fichier en gardant le même nom.
- FAQ : questions et réponses FR/EN dans `FAQ` (`src/data.js`), affichées sur la page Services.
- Bouton WhatsApp flottant : visible sur toutes les pages sauf Contact (`src/components/WhatsAppFab.jsx`).

## Police, couleurs, justification
- Police : Montserrat (chargée dans `index.html`, appliquée via `--font-display` et `--font-body` dans `src/styles.css`).
- Palette luxe discrète : ivoire `#F6F2EA`, charbon `#14181F`, or champagne `#C9A96A`, bronze `#8A6A33`, bordeaux `#7B2D3B`. Les variables sont en haut de `src/styles.css` ; les couleurs des illustrations sont dans `src/Art.jsx` et `src/data.js`.
- Texte justifié avec césure automatique (fin de `src/styles.css`). Pour revenir à un alignement à gauche, supprimer le bloc « Texte justifié ».
