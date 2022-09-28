console.log("estou no arquivo AulaDev1.js")

const fs = require('fs');

let dados = fs.readFileSync(__dirname +"/olaMundo.txt", 'utf8');
let moment = require('moment');
let data = moment().format('MMM do YY')
console.log(dados)

console.log(data)

// const heroes = require ('./superHeroes');
// console.log(heroes[0]); //acessa o objeto inteiro
// { nome: "wonder Woman", poder: "golpear com chicote", cumprimentar: [function: cumprimentar]}

// console.log(heroes[0].cumprimentar()) acessa o método

