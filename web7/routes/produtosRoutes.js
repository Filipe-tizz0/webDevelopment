const express = require('express');
const router = express.Router();
// importar controller
const usuariosController = require('../controllers/produtosController.js');
// rotas
router.post('/produtos', usuariosController.listarProdutos);
router.get('/produtos', usuariosController.listarProdutos);
router.get('/produtos/:id', usuariosController.buscarProdutos);
router.put('/produtos/:id', usuariosController.updateProdut);
router.delte('/produtos/:id', usuariosController.deleteProduto);
module.exports = router;