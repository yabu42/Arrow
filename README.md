# ARROW by Elmagination

Application (PWA) qui compte les points : fléchettes (cible réaliste, 18 jeux, tournois, statistiques, ambiances, voix et animations), pétanque, palet, Mölkky et cornhole en 3D, Tossit.

## Mise en ligne avec GitHub Pages (gratuit)

1. Sur github.com, cliquez sur **+** puis **New repository**. Nom : `arrow`. Cochez **Public**. Cliquez **Create repository**.
2. Dans le nouveau dépôt, cliquez **uploading an existing file**, glissez **tous les fichiers de ce dossier**, puis **Commit changes**.
3. Allez dans **Settings → Pages**. Sous **Branch**, choisissez `main` et `/ (root)`, puis **Save**.
4. Après une à deux minutes, l'adresse s'affiche : `https://VOTRE-NOM.github.io/arrow/`.

## Installer sur le téléphone

- **Android (Chrome)** : ouvrez l'adresse, menu **⋮ → Installer l'application** (ou « Ajouter à l'écran d'accueil »).
- **iPhone (Safari)** : ouvrez l'adresse, bouton **Partager → Sur l'écran d'accueil**.

## Comptes

Comptes ARROW indépendants (e-mail + mot de passe chiffré en bcrypt), gérés par la fonction serveur `arrow` du projet Supabase hébergé chez Elmagination. Les e-mails de mot de passe oublié partent au nom d'Elmagination Studio. Seule la clé publique est dans l'application.

## Voix enregistrées

Une ambiance = un fichier son (`voix-standard.mp3`, `voix-chambreur.mp3`, `voix-superchambreur.mp3`, `voix-superstar.mp3`). Le fichier `voix.json` indique où commence chaque phrase. Voix : elevenlabs.io
