# BlogVerse Client

Application frontend React + TypeScript + Vite pour la plateforme de blogging BlogVerse. Cette application offre une interface utilisateur pour consulter les articles, s'authentifier et gérer le profil utilisateur.

## Prérequis

Avant d'exécuter le projet, assurez-vous d'avoir installé les éléments suivants :

- **Node.js** (v18 ou supérieure)
- **npm** (v9 ou supérieure)
- **Backend BlogVerse** en cours d'exécution (voir les instructions du backend)

## Installation

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement :**
   - Créez un fichier `.env` à la racine du project client :
     ```bash
     VITE_API_URL = http://localhost:3001
     ```
   - Assurez-vous que l'URL pointe vers votre serveur backend

## Exécution de l'Application

### Mode Développement
```bash
npm run dev
```
Démarre le serveur de développement avec hot module replacement (HMR). L'application se recharge automatiquement lors de vos modifications.

### Mode Production
D'abord, construisez le projet :
```bash
npm run build
```

Cela génère une version optimisée dans le dossier `dist/`.

Pour prévisualiser la version de production localement :
```bash
npm run preview
```

## Autres Commandes Disponibles

- **Linting :**
  ```bash
  npm run lint
  ```
  Vérifie et corrige les problèmes de style de code en utilisant ESLint.

## Structure du Projet

```
src/
├── actions/           # Actions serveur pour les opérations API
├── assets/            # Images et ressources statiques
├── components/        # Composants React réutilisables
│   └── ui/           # Composants UI élémentaires
├── loaders/          # Chargeurs de données pour les routes
├── pages/            # Pages principales de l'application
├── services/         # Services pour communiquer avec l'API
├── utils/            # Fonctions utilitaires
├── App.tsx           # Composant principal
└── main.tsx          # Point d'entrée de l'application
```

## Pages Principales

- **Home** : Page d'accueil avec les articles en vedette et tendance
- **Login** : Page de connexion utilisateur
- **Signup** : Page d'inscription
- **CreatePost** : Créer un nouvel article
- **Post** : Consulter un article en détail
- **Profile** : Profil utilisateur

## Dépendances Principales

- **React Router** : Navigation entre les pages
- **Axios** : Requêtes HTTP vers l'API backend
- **Tailwind CSS** : Framework CSS utilitaire pour le style
- **Radix UI** : Composants d'interface utilisateur accessibles
- **Framer Motion** : Animations fluides
- **React Hook Form** : Gestion des formulaires
- **Lucide React** : Icônes SVG

## Variables d'Environnement

| Variable | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL du serveur backend | `http://localhost:3001` |

## Démarrage Rapide

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Configurer le fichier `.env` avec l'URL de votre backend

3. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrir votre navigateur à `http://localhost:5173` (ou l'URL affichée dans le terminal)

## Dépannage

- **Erreur de connexion à l'API** : Vérifiez que le backend est en cours d'exécution et que `VITE_API_URL` pointe vers l'adresse correcte
- **Erreur de port** : Si le port 5173 est déjà utilisé, Vite assignera automatiquement le prochain port disponible
- **Problèmes de dépendances** : Supprimez `node_modules` et `.eslintcache`, puis exécutez `npm install` à nouveau