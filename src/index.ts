// src/index.ts Sami et ayoub
import express from 'express'; 

const app = express();
const port = 3000;

app.use(express.json());

app.get('/sami', (_req, res) => {
  res.send("Route de Sami !");
});

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;