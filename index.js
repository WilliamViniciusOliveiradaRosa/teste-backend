// Importa o Express
const express = require('express');
const app = express();
const cors = require('cors');  // Adicionando a importação do cors

// Define a porta que a API vai escutar
const PORT = process.env.PORT || 3000;

// Permitir CORS de qualquer origem
app.use(cors({ origin: '*' }));

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rota de exemplo: GET
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à minha API!' });
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
