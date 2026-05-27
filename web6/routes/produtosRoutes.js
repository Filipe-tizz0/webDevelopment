const express = require('express');
const router = express.Router();
// importar controller
const usuariosController = require('../controllers/produtosController.js');
// rotas
router.get('/buscarProdutos', usuariosController.listarProdutos);
router.get('/buscarProdutos/:id', usuariosController.buscarProdutos);
router.get('/countProdutos', usuariosController.countProdutos);
module.exports = router;