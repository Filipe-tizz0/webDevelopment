const express = require('express');
const app = express();
// importar rotas
const usuariosRoutes = require('./routes/produtosRoutes.js');
// usar rotas
app.use('/prods', usuariosRoutes);
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});