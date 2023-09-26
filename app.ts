// app.ts
// Importez les modules nécessaires
import express from 'express';
import { connectToDatabase } from './db';

const app = express();
const port = 3000;

// Connexion à la base de données MongoDB Atlas
connectToDatabase();

// Vos routes et logique d'application ici...
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
