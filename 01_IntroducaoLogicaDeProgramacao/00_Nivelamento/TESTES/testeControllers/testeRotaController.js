let express = require('express')
let router = express.Router();
let testeCarrinhoController = require('/testeCarrinhoController/addItem')

router.get('/:item',testeCarrinhoController)

module.exports = router