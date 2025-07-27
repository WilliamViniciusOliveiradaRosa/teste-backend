// Importa o Express
const express = require('express');
const app = express();
const cors = require('cors');  // Adicionando a importação do cors

// Define a porta que a API vai escutar
const PORT = process.env.PORT || 3000;

// Permitir CORS de qualquer origem, com configuração de métodos e cabeçalhos
app.use(cors({
  origin: '*', // Aceita qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  credentials: true // Se for necessário enviar cookies ou cabeçalhos
}));
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
