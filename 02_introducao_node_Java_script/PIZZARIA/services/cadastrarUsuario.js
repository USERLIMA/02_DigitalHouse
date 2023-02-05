/*

1 - Crie uma funçõ cadastrar usuário
2 - Ela deve receber como parametro usum objeto com os seguintes campos
    * nome, email, senha, endereço
3 - Essa função vai criptografar a senha
4 - Importar um array de usuários
5 - Criar um objeto com os dados no usuário no formato:
    * {
        id: ,
        nome: ,
        email: ,
        senha: +++,
        endereço: [],
    }

OBS.: O campo id deve ser unico para cada usuário.
[BONUS]: Verificar um usuário com este email já cadastrado 
*/

const fs = require('fs');
const bcrypt = require('bcrypt');

//Importar o array de usuários na variável usuários
const usuarios = require('../dataBases/usuarios.json');

// cadastrar a função
function cadastrarUsuario(objeto){

    let novoId = usuarios[usuarios.length - 1].id + 1;
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10);

    //Objeto com os dados estruturados
    let usuario = {
        Id: novoId,
        // 123,
        nome:objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        //bcrypt.hashSync(objeto.senha, 10),
        enderecos: [objeto.enderecos],
        formasDePagamentos: []
        
    }
    //Adicionar o objeto ao final do array usuários (usuarios.push)
    //usuarios.push(objeto);
    usuarios.push(usuario);

    //salvar objeto no arquivo
    fs.writeFileSync('./dataBases/usuarios.json', JSON.stringify(usuarios, null, 4)); // <-- JSON.stringify irá transformar um ojeto ou um array em uma string do tipo JSON

};

//testar a função
let usuario = {
    nome: "Raul das Árvores Dias 3",
    "email": "raul@dasFloresDias3.com",
    "senha": "abcdef12345678",
    "enderecos": "Rua das Camélias, 244"
};

cadastrarUsuario(usuario);