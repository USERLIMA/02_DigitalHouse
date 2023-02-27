// Aula 1 testes 

let numeroMenor = 2
let numeroMaior = 3

let eMenor = numeroMenor < numeroMaior
let eMaior = numeroMaior > numeroMenor

console.log(eMenor)
console.log(eMaior)

//_____________________________________________________________________________________________________________________________

let pessoa = {
    nome: "Caio",
    idade: 21,
    anoNascimento: 2000
}

//let json = JSON.stringify(pessoa);
//console.log(json)

//let objetoDeNovo = JSON.parse(json)
//console.log(objetoDeNovo)

let listaCompras = ['Pão', 'Ovo', 'Manteiga']

let json = JSON.stringify(listaCompras)
console.log(json[0])
console.log(json)

let arrayNovo = JSON.parse(json)
console.log(arrayNovo)

let alunos = ["João", "Pedro", "Jorge", "Francisco"]

var indiceJoao = alunos.indexOf('João')

var indiceFrancisco = console.log(alunos.indexOf('Francisco'))
console.log(alunos.slice(0,4))

//trim

var frase = ' Sou programador js '
console.log(frase)
console.log(frase.trim())

//split

console.log(frase.split(' '))

//replace

// let fraseModificada = frase.replace('js', 'HTML')
console.log(frase.replace('js', 'HTML'))

// teste de obj.

let tenista = { 
    nome: 'Caio',
    sobreNome: 'Lima',
    cumprimentar: function(){
        return 'Olá, me chamo ' + this.nome + ' ' + this.sobreNome
    }
}

console.log(tenista.cumprimentar())

function mudarNome (nome, sobreNome){
    this.nome = nome
    this.sobreNome = sobreNome
}

console.log(new mudarNome('KRATOS', "PARRUDÃO"))
console.log(tenista)

// teste string

function dominio(url){
//    if(url)
    return "http://" + url;
//  else
    console.log(url+" não informada");
}


console.log(dominio('gov.com'))

// teste objetos literais 

let pais = { 
    nome: 'Brasil',
    cidade: 'SP',
    nacionalidade: function(){
        return 'Olá, sou do ' + this.nome + ', ' + this.cidade
    }
}

console.log(pais.nome)
console.log(pais['cidade'])

console.log(pais.nacionalidade())

// teste 2

let carro = { 
    marca: 'Fiat',
    modelo: 'uno',
}

function carroNovo (marca, modelo){
    this.marca = marca
    this.modelo = modelo
}

console.log(carro)
console.log(new carroNovo('Renault', 'Clio'))

//Arrow Functions

//let soma = (num1, num2) => {return num1 + num2}
let soma = (num1, num2) => num1 + num2
console.log(soma(1,2))

let par = numero => {
    if (numero%2 ===0){
        return true
    }
    return false
}
console.log(par(2))

const somar = numero =>{
    console.log('recebi um numero: ', numero)
}

somar(2)

const somar2 = (numeroA, numeroB) => 
    console.log('recebi um numero: ', numeroA)

somar2(2,4)

const somar3 = (numeroA, numeroB) => {
    console.log('recebi um numero: ', numeroA)
    return numeroA + numeroB
}
console.log(somar3(2,4))

let cincoNumeros = () => console.log([1,2,3,4,5])

cincoNumeros()

let multiplicarPorDois = (num1) => {
    return console.log(num1 *2)
}

multiplicarPorDois(2)

let mostrarNome = () => {
    return console.log("Meu nome é Ryan Dahl")
  }

mostrarNome()

// IF ternário / Switch

function ifTernario () {
    return (4 > 10 ? 'o 4 e maior' : 'o 10 é maior')
}

console.log(ifTernario())

let idade = 15

switch (idade) {
    case 10:
    console.log('Tem 10 anos')
    break
    case 5: 
    console.log('Tem 5 anos')
    break
    default: 
    console.log('qual a idade ?') 
}


let dia = "sabado";

function fimDeSemana(dia){
	//criação do switch
	switch (dia) {
    case 'segunda':
    console.log('você tem aula')
    break
    case 'quarta': 
    console.log('você tem aula')
    break
	case 'sexta':
	console.log('você tem aula')
	break
    default: 
    console.log('você não tem aulas') 
}
}

fimDeSemana(dia)

let texto = 'loro'
function papagaio(texto){          
    for(i=0;i<5;i++){
    console.log(texto)}
}

const subtrair = (numeroA1, numeroB2) => numeroA1 - numeroB2
const multiplicar  = (numeroA1, numeroB2) => numeroA1 * numeroB2
const dividir  = (numeroA1, numeroB2) => numeroA1 / numeroB2
const somar5 = (numeroA1, numeroB2) => numeroA1 + numeroB2

const calculadorax = (numeroA1, numeroB2, operacao) => operacao(numeroA1,numeroB2)

console.log(calculadorax(10,20,somar5))

function dobro (numA) {
    return numA * 2
}
function triplo (numB) {
    return numB * 3
}

// perguntar: caso eu declare as variáveis para cada aplicação eu teria uma var op = function, diferente ? 

function aplicar (numA, op){
    return op(numA)
}
aplicar(2, dobro);
aplicar(2, triplo);

// EXEMPLO AUXILIAR:

//function timeOut (num10, num20, num30){
//    setTimeout(() => {
//        console.log(num10)
//    }, 2000)
//    console.log(num20)
//    console.log(num30)
//}
//timeOut(10,20,30)

// arrow functions

const arrayAr = [1,11, 2,3,4,5,6,7,8]


const metodoMap = arrayAr.map((numeroW) => numeroW * 2 )
const metodoFilter = arrayAr.filter((numeroE) => numeroE > 5)

// acumulador é o valor '}, 0' e o corrente '1'
const metodoReduce = arrayAr.reduce((corrente, acumulador) => {
    return corrente + acumulador
}, 0)

arrayAr.forEach((numeroR) => {
    const numeroDuplicado = numeroR * 2
    console.log(numeroR)
    console.log(numeroDuplicado)
})

const a = arrayAr.sort((a,b) => {
    return a - b
})



console.log(arrayAr)
console.log(metodoMap)
console.log(metodoFilter)
console.log(metodoReduce)

// for 'in' trará a posição de cada objeto, já o for 'of' os valores 

const objt = {
    nome: 'caio',
    idade: 221,
    cidade: 'SP',
    zip: 0.455
}

for (let numeroT of arrayAr){
    console.log(numeroT)
}

for (let valor in objt){
    console.log(objt[valor])
}

// callBack

function adicionarHttp(url) {
    return 'http://' + url
  }
  function processar(listaDeSites, callback){
    let listaProcessada = []
    for(let i=0; i < listaDeSites.length; i++) {
        const urlProcessada = callback(listaDeSites[i])
        listaProcessada.push(urlProcessada)
    }
    return listaProcessada
  }
  const lista = ["www.twitter.com", "www.google.com"]
  const processada = processar(lista, adicionarHttp)
  console.log(processada)

// GIT - 
// git



// Obj. Date

//let diaDaMinhaData = MinhaData

//Continuação do trabalho 

let meuAniversario = new Date(2000, 03, 22)

console.log(meuAniversario)

const dataHj = new Date()

console.log(dataHj.getDay())
console.log(dataHj.getMonth())
console.log(dataHj.getFullYear())


let dateEx = new Date('2000-04-22')

console.log(dateEx)

//perguntar o porque no PG retorna 2020 e aqui um Num. ext.

let dataEX2 = new Date(2020,04,22)

console.log(dataEX2.setDate(2020)); 
console.log(dataEX2.setMonth(2020)); 
console.log(dataEX2.setFullYear(2020));  

//Destructuring

let cores = ['Roxo', 'azul', 'amarelo']
let azul = cores[1]
console.log(azul)

let carroEx = {
    marca: 'Ford',
    ano: 2020,
    cor: 'Branca'
}

let marcaCarro = carroEx.marca
console.log(marcaCarro)

let cores2 = ['Roxo', 'Azul', 'amarelo']
//let [Roxo, Azul, Amarelo] = cores2
//let [cor1, cor2, cor3] = cores2
let [cor1, , cor3] = cores2
console.log(cores2)
console.log(cor1)
//console.log(cor2)
console.log(cor3)



let pessoa2 = {
    nome: 'Caio',
    idade2: 21,
    faltas: 2
}

//let {nome, idade2, faltas} = pessoa2
//console.log(pessoa2)
//console.log(nome)
//console.log(idade2)
//console.log(faltas)

// Perguntar sobre uma aplicação

let {nome, idade2, faltas: totalFaltas} = pessoa2
console.log(pessoa2)
console.log(nome)
console.log(idade2)
console.log(totalFaltas)

// no VsC retorna, mas no PG NÃO!

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [marrocos, bariloche, barcelona, china, grecia] = destinosIncriveis

console.log(bariloche, china)

//var Bariloche = Bariloche
//var China = China

//Spread Operator - 13/03

let frutasUm = ['Banana', 'Maçã', 'Pera']
let frutasDois = ['Pessego', 'Ameixa', 'Laranja']

let todasAsFrutas = [...frutasUm, ...frutasDois]
console.log(frutasUm)
console.log(frutasDois)
console.log(todasAsFrutas)

let curso = {
    curso: 'FullStack',
    turno: 'Manhã',
    sede: 'SP'
}

let estudanteUm = {
    nome: 'Caio',
    email: 'caio@email.com',
    ...curso
}

let estudanteDois = {
    nome: 'Pedro',
    email: 'Pedro@email.com',
    ...curso
}

console.log(estudanteUm)
console.log(estudanteDois)

function comVariosParametros (...paramns) {
    console.log(paramns)
}

comVariosParametros('a','b','c',45)

// perguntar se precisa definir a var, ou se o próprio método define o como num./array o que declaramos no console
function somarRest (...numerosT) {
    return numerosT.reduce((acum, num) => acum += num)
}

console.log(somarRest(1,4))
console.log(somarRest(1,4,13,5))

// 17/03

function adcionarHttp2(url2) {
    return 'http://' + url2
    //return 'http://${url2}' //não deu certo com $
}

function processar2(listaDeSites2, callback2) {
    const sitesAlterados2 = listaDeSites2.map(function(site2) {
        return callback2(site2)
    })
    return sitesAlterados2
}

const listaDeSites2 = [ 'www.site1.com','www.site2.com','www.site3.com', 'www.site4.com','www.site5.com']
//console.log(listaDeSites2)

console.log(processar2(listaDeSites2, adcionarHttp2))

const listaTotalDeNumeros = [ 1,2,3,4,5,65,7,8,9,10]
let totalNum = 0

for(let i = 0; i < listaTotalDeNumeros.length; i++) {
    totalNum = totalNum + listaTotalDeNumeros[i]
}

console.log(totalNum)

const aZ = 1 + 2 + 3 + 4 + 5 + 65 + 7 + 8 + 9 + 10
console.log(aZ)

// Ou 

const sumTotal = listaTotalDeNumeros.reduce((corrente, acumulador) => {
    return corrente + acumulador
}, 0)

console.log(sumTotal)

//20.03

// server - aulas 

const http = require('http')
http.createServer((req, res) =>  {
	console.log("Instanciando um servidor");
}).listen(3000, 'localhost', () => {
  console.log("Servidor escutando na porta 3000");
});

// teste 2 

const express = require('express');
const app = express();
app.listen(8000, () => {
  console.log("Levantando um servidor com Express");
});
//  teste 4

//const express = require('express');
//const app = express()
// Escreva seu código aquí


app.get('/home', (req, res) => {
  res.send('Olá, estamos na página home');
});

app.listen(8000, () => {
  console.log("Levantando um servidor com Express");
});

// teste 5

// const express = require('express');
// const app = express();

let boasVindas = "Bem vindo/a, aqui estamos em seu perfil"
// Escreva seu código aqui

app.get('/perfil', (req, res) => {
  res.send(boasVindas);
});

app.listen(8000, () => {
  console.log("Levantando um servidor com Express");
});

