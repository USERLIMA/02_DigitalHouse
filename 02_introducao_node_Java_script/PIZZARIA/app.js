// 1 - Importar o express
const express = require('express');
const path = require('path');
const router = require('./router');

// 2 - Criar o servidor
const servidor = express();

// Define a pasta public como sendo a pasta arquivos estáticos
 servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir roteador a ser utilizado
// servidor.get('/usuarios', (req,res)=>
// {
//     console.log("Chegou uma requisição!")
//     res.send("Vou te mandar uma lista de usuários... teste com nodemon");
// });

servidor.use(router);

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);