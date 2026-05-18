require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const Middleware_ = require('./src/middleware');

const app = express();
app.use(express.json());
const SECRET = process.env.SECRET;
// Simulação de banco de dados
const usuarios = [
    { id: 1, usuario: 'admin', senha: '123', role: 'admin' },
    { id: 2, usuario: 'joao', senha: '123', role: 'user' }
];
// Rota de login
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);
    if (!user) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
    }
    const token = jwt.sign(
        {
            id: user.id,
            usuario: user.usuario,
            role: user.role
        },
        SECRET,
        { expiresIn: '1h' }
    );
    res.json({ token });
});
// ROTAS
app.get('/perfil', Middleware_.autenticarToken, (req, res) => {
    res.json({ usuario: req.usuario });
});
app.get('/admin',
    Middleware_.autenticarToken,
    autorizarRole('admin'),
    (req, res) => {
        res.json({ mensagem: 'Área administrativa' });
    }
);
app.get('/me',
    Middleware_.autenticarToken,
    autorizarRole('admin'),
    (req, res) => {
        res.json({ mensagem: 'Área administrativa' });
    }
);
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});