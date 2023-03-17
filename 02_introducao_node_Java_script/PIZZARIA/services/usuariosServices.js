// importando dependencias
const fs = require('fs');
const bcrypt = require('bcrypt');

// importar o array de usuarios na variavel de usuarios

const usuarios = require('../dataBases/usuarios.json');

function listar(){

    const formatUsuario = usuario => {
        return {
            Id: usuario.Id,
            nome: usuario.nome,
            email: usuario.email,
        }
    }

    let usuariosFormatados = usuarios.map(formatUsuario);

    console.table(usuariosFormatados);
}

function listarNomes(){
    // Seu código aqui
    console.table(usuarios.map(usuario=>usuario.nome));
}

function buscar(trecho)
{
    let temTrechoNome = usuario => usuario.nome.includes(trecho);

    let usuariosComNomesBuscados = usuarios.filter(temTrechoNome);

    return usuariosComNomesBuscados;
    // let temTrechoNome = usuario => 
    // {

    //     // return usuario.nome.includes(trecho)
    //     // if(usuario.nome.includes(trecho))
    //     // {
    //     //     return true
    //     // } else 
    //     //     {
    //     //         return false
    //     //     }
    // }
    // retorna um array com os usuarios que tenham o nome buscado
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
        Id: novoId,
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
    const removerUsuario = usuarios.findIndex(usuario=>usuario.Id == idDoUsuarioParaRemover)
    usuarios.splice(removerUsuario,1)
    salvar (usuarios)
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
    console.log(novosDados)
    let senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10);
    const usuarioId = usuarios.find(usuario=>usuario.Id == idUsuario);
        usuarioId.nome = novosDados.nome
        usuarioId.email = novosDados.email 
        usuarioId.senha = novosDados.senhaCriptografada
    salvar(usuarios)
console.log(usuarioId)
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario)
{
    // Seu código aqui
    let usuario = usuarios.find(function(usuarios){
        return usuario.Id === idUsuario
    })

if(usuario != undefined){
    usuario.enderecos.splice(posicaoDoEndereco, 1)
} else {
    console.erro("Esse Id não existe")
}

    salvar(usuarios)

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
    listarNomes,
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