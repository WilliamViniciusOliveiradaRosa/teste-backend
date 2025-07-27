const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Definindo o cabeçalho CORS manualmente
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');  // Permite requisições apenas do seu frontend
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
  // Se for uma requisição OPTIONS (preflight), responder com status 200
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rota de exemplo: GET
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à minha API! onado' });
});

// Rota de exemplo: POST
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `Usuário ${name} criado com sucesso!`, email });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
