const usuarios = require('./dataBase/usuario.json')

// console.log(usuarios);

// function usuarioTemFormaDePagamento(usuarioObjeto){
//     if(usuarioObjeto.formasDePagamentos.length > 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const usuarioTemFormaDePagamento = usuarioObjeto => {

//     return usuarioObjeto.formasDePagamentos.length > 0;

//     // let condicao = usuarioObjeto.formasDePagamentos.length > 0

//     // if(condicao == true){
//     //     return true;
//     // }else{
//     //     return false;
//     // }

//     // return condicao;
// }

const usuarioTemFormaDePagamento = usuarioObjeto => usuarioObjeto.formasDePagamentos.length > 0;

// const usuarioEncontrado = usuarios.find(usuarioTemFormaDePagamento);

// const usuarioEncontrado = usuarios.find(usuarioObjeto => usuarioObjeto.formasDePagamentos.length > 0)

const usuarioTemId125 = usuarioObjeto => usuarioObjeto.Id == 125;

const usuarioComecaComR = usuarioObjeto => usuarioObjeto.nome[0] === 'R';



const pergunta1 = usuarios.find(usuarioTemFormaDePagamento)
const pergunta2 = usuarios.find(usuarioTemId125)
const pergunta3 = usuarios.find(usuarioComecaComR)

const posicaoDoUsuario = usuarios.findIndex(usuarioTemId125)

const todosUsuariosComFormaDePagamento = usuarios.filter(usuarioTemFormaDePagamento)

const todosUsuariosComInicialR = usuarios.filter(usuarioComecaComR)

const idDosUsuarios = usuarios.map(usuarioObjeto => usuarioObjeto.Id)

const nomeMaiusculo = usuarios.map( usuarioObjeto => usuarioObjeto.nome.toUpperCase())

// console.log(pergunta1)
// console.log(pergunta2)
// console.log(pergunta3)

// console.log(posicaoDoUsuario)

// console.log(todosUsuariosComFormaDePagamento)

// console.log(todosUsuariosComInicialR)

// console.log(idDosUsuarios)

console.log(nomeMaiusculo)