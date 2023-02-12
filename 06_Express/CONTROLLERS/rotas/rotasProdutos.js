const express = require('express');

const produtosController = require('../Controllers/produtosController');

const router = express.Router();

router.get('/criar', produtosController.criandoProduto );

//router.get('/deletar/:id', (req,res) => res.send("Deletando um produto"));

router.get('/deletar/:id', produtosController.deletarProduto);

module.exports = router;
