const express = require('express');
const app = express();
app.set('json spaces', 2);
const port = 3000;

const usuarios = [
  { nome: "Ana Maria", cidade: "Crato" },
  { nome: "Joana", cidade: "Sergipe" },
  { nome: "Débora", cidade: "Juazeiro do Norte" },
  { nome: "Tainá", cidade: "Recife" },
  { nome: "Marcelo", cidade: "Manaus" },
  { nome: "Carla", cidade: "Macapá" },
  { nome: "Olívia", cidade: "Sorocaba" },
  { nome: "Vitória", cidade: "Fortaleza" },
  { nome: "Luana", cidade: "Mauriti" },
  { nome: "Márcia", cidade: "Crato" },
];

//Rotas
app.get('/usuario/todos', (req, res) => {
  res.json(usuarios);
});

app.get('/usuario/cidade/:cidade', (req, res) => {
  const cidade = req.params.cidade.toLowerCase();
  const filtro = usuarios.filter(u => u.cidade.toLowerCase() === cidade);
  res.json(filtro);
});

app.get('/usuario/sorteado', (req, res) => {
  const sorteado = usuarios[Math.floor(Math.random() * usuarios.length)];
  res.json(sorteado);
});

app.listen(port, () => {});
