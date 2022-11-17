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

//Importar o array de usuários na variável usuários
const usuarios = require('../dataBases/usuarios.json');

// cadastrar a função
function cadastrarUsuario (objeto){

    //Adicionar o objeto ao final do array usuários (usuarios.push)
    usuarios.push(objeto);

    //salvar objeto no arquivo
    fs.writeFileSync('./dataBases/usuarios.json', JSON.stringify(usuarios)); // <-- JSON.stringify irá transformar um ojeto ou um array em uma string do tipo JSON

};

//testar a função
let usuario = {
    nome: "Raul das Flores",
    "email": "raul@dasFlores.com",
    "senha": "abcde",
    "enderecos": "Rua das Camélias, 99"
};

cadastrarUsuario(usuario);sss