const express = require('express');

const servidor = express();

servidor.use(express.static("public"));

servidor.get
(
    '/produtos',
    (req,res) => 
    {
        return res.sendFile(__dirname + '/views/produtos.html');
    }
)

servidor.listen(3007)