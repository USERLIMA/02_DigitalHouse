// importando dependencias
const fs = require('fs');
const bcrypt = require('bcrypt');

// importar o array de usuarios na variavel de usuarios

const usuarios = require('../dataBases/usuarios.json');

function listar(){
    // Seu código aqui
}

function salvar(arrayDeUsuarios){
    // Seu código aqui
    fs.writeFileSync('./dataBases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

function cadastrar(objeto){
    // Seu código aqui
    // Determinando o novo id, como, sendo o id do último usuário + 1
    let novoId = usuarios[usuarios.length - 1].id + 1;
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10);

    // Criem um objeto usuario com os dados "lapidados"
    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;