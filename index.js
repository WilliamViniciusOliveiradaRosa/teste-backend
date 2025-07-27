const express = require('express');
const app = express();
// Importando o pacote cors
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// Usando o CORS com a origem correta
app.use(cors({
  origin: 'http://localhost:5173',  // A origem do seu frontend
  methods: ['GET', 'POST', 'OPTIONS'],  // Métodos aceitos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos aceitos
}));


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
