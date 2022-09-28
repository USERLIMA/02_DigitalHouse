const express = require('express');
const userRoutes = express.Router();

const fs = require('fs');
const crypto = require('crypto');
// instalar o bcrypt no terminal
const bcrypt = require('bcrypt');

//retirado, pois estava retornando erro no json
//const users = require('../dataBase/usuarios.json')

const usuarios = [];

// de-se retornar o usuário no lugar da mensagem após o código estar pronto
//userRoutes.get('/', (request, response) =>
// response.json({mensagem: "UserRoutes está funcionando"})
//)

userRoutes.get('/', (request, response) =>
 response.json(usuarios)
)

userRoutes.post('/', (request, response) => {
    //Receber os dados do usuário
    const{nome,email,senha} = request.body;
    //console.log(users);

    //let usuarios;

    //verificar se o usuário existe
//fs.readFile("../dataBase/usuarios.json", "utf-8", (err, usuarioString) => {
//    if (err) {
//        console.log(err)
//        return response.status(500).json({mensagem: "Error ao conectar a base de dados de usuários"})}

    //console.log(usuarioString);

//    const usuarios = JSON.parse(usuarioString);

    //console.log(usuarios);
    
    const usuarioExiste = usuarios.find(user =>user.email == email);
        
    if (usuarioExiste) {
        return response.status(400).json({mensagem: "Usuário já existe"})
    };
    
    //Colocar um id e encriptar a senha
    const usuario = {
        id: crypto.randomBytes(4).toString('HEX'),
        nome,
        email,
        senha: bcrypt.hashSync(senha, 8)
    }

    usuarios.push(usuario);

    return response.status(201).json(usuarios);
    //console.log(usuario);
    //salvar no arquivo json
//    const usuarioEmString = JSON.stringfy(usuario);
    
    //transforma o objeto em string para subir ao usuario.json
//    fs.writeFileSync('dataBase/usuarios.json', usuarioEmString, error => {
//        if (error) {
//            return response.status(500).json({mensagem: "Error ao salvar usuário"})
//        }
//        return response.status(201).json(usuario)
//        })

//    })

})

userRoutes.put('/:id', (request,response) => {
    const { nome } = request.body;
    
    const id = request.params.id;

    const usuario = usuarios.find(user => user.id == id );

    if (!usuario) {
        return response.status(400).json({mensagem: "Usuário não existe"})
    }

    usuario.nome = nome;

    return response.status(200).json(usuario);


})

module.exports = userRoutes;