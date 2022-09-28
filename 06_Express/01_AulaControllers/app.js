const express = require('express');

const rotasProdutos = require('./rotas/rotasProdutos');

let app = express();

const porta = 3500;

app.get('/', (req, res) => res.send("Olá Mundo!"));
app.get('/contatos', (req, res) => res.send("Página de contatos"));

app.use('/produtos/:id?', (req, res) => {
    //let id = req.params.id;
    let {id} = req.params;
    console.log("Eu tenho o produto com o id: ", id);
    res.send("Eu tenho o produto com o id: " + id)
});

//criando o servidor

app.listen(porta, ()=> console.log("Servidor rodando na porta", porta));