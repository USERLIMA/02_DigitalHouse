let senha = 222
let senha2 = 222

if(senha == senha2)
{
    console.log(true)
}else{
    console.log(false)
}

// AULA 1 (PARTE 1):

var peso = 80
var nome = 'Caio'
var sobrenome = 'Lima'
var numeroDaSorte = 7
var idade =  21
var salarioMinimo = 935.5

    console.log('eu tenho', idade, 'anos', 'e peso', peso, 'Kg,', 'fora que meu nome é', nome, sobrenome)

var logradouro = 'Rua das pedras'
var bairo = 'Jd. Paulistnao'
bairo = 'Alphaville'

    console.log('Olá, me chamo', nome, 'tenho', idade, 'anos,','moro na', logradouro + '-' + bairo  )

// AULA 1, (PARTE 2):
var numeroA = 10
var numeroB = 20

var resultadoSoma = numeroA + numeroB
    console.log('Soma =', resultadoSoma)

var resultadoMultiplicacao = numeroA * numeroB
    console.log('Multiplicação =', resultadoMultiplicacao)

var resultadoDivisao = numeroA / numeroB
    console.log('Divisão =',resultadoDivisao)

var resultadoSubtracao = numeroA - numeroB
    console.log('Subtração =',resultadoSubtracao)
norn
// AULA 1, (PARTE 3):

var nome = 'Taylor'
var sobreNome = 'Alvarenga'
var profissao  = 'Programadora'
var cartaoDeVisita = nome + ' ' +sobreNome + ' ' + '-' + ' ' + profissao

    console.log(nome + ' ' +sobreNome + ' ' + '-' + ' ' + profissao)
    console.log(cartaoDeVisita)

//let numeroMenor = 2
//let numeroMaior = 3
//
//let eMenor = numeroMenor < numeroMaior
//let eMaior = numeroMaior > numeroMenor
//
//console.log(eMenor, eMaior)


let numeroMenor = 2
let numeroMaior = 3

let eMenor = numeroMenor < numeroMaior
let eMaior = numeroMaior < numeroMenor

if(numeroMaior > numeroMenor){
    console.log(eMaior)
}

if(numeroMenor < numeroMaior){
    console.log(eMenor)
}


   
// AULA 1,  (PARTE 4):

var idade2 = 17
if(idade2 >= 18){
    console.log('Você é obrigado a votar')}
        if(idade2<18){
            console.log("Seu voto é opcional")}


// AULA 1,  (PARTE 5):

var idade3 = 17
var nome2 = 'João'
if(idade3 >= 18){
    console.log('Olá', nome2,'Você passou no nosso teste e já pode dirigir!')}
        if(idade3<18){
            console.log('Olá', nome2)}

// AULA 1,  (PARTE 6):

var idade4 = 15 
  if (idade4 >= 18) {
    console.log("Você já pode dirigir!")
  } else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
  }

  // AULA 1,  (PARTE 7):

  var ladosIguais = 0
    if (ladosIguais == 3){
        console.log("Equilátero")}
        else if(ladosIguais == 2){
            console.log("Isósceles")}
            else{
                console.log('Escaleno')
}
  
// AULA 1,  (PARTE 7):


var dia = "domingo"
var tempo = "bom"

if(dia == "domingo" && tempo == "bom"){
    console.log("Hoje é dia de festa!")}
    else{
        console.log("Hoje é um dia normal!")
}

var corIphone = "Preto"

if(corIphone == "Preto" || corIphone == "Prata"){
console.log("Vou fechar a compra")
}else {
console.log("Não quero mais esse iPhone")
}

var feriado = false

if(!feriado){
    console.log("tenho que trabalhar!")
}else {
    console.log('Oba posso ficar em casa!')
}

// o módulo %, representa o quanto resta de uma divisão
var teste = 15%2
console.log(teste)


var produtoQtd = 3
var produtoAtivo = true

if(produtoQtd > 0 && produtoAtivo){
console.log("Você pode finalizar essa compra")
}else {
console.log("Produto não está disponível para compra")
}

var usuarioAltura = 190
var usuarioIdade = 7
var usuarioAcomp = false

if(usuarioAltura > 120 && usuarioIdade >= 12){
    console.log("Você pode subir")
        }else if(usuarioAcomp || usuarioIdade >= 8 && usuarioAltura >= 120){
            console.log("Você pode subir")
        }
        else{
            console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
}
    

    
// AULA 1,  (PARTE 8):

function cartaoDeVisitas (){console.log('Caio Lima')}

function dizerOla(){
    return "olá"
    // o console logo a baixo não será executado devido ao return acima!
    console.log('Oi também!')
}
console.log(dizerOla)

function autonomia(quantidadeDeCombustivel, rendimento){
    return quantidadeDeCombustivel * rendimento
    }
console.log(autonomia(20,5))

function calculaValorDevido(pesoDaRoupaSuja) {
    return pesoDaRoupaSuja * 5.00
}

console.log(calculaValorDevido(5))

function calculaValorDevido(pesoDaRoupaSuja) {
    return (pesoDaRoupaSuja * 3.00) + 10.0
}

console.log(calculaValorDevido(3))

//TESTE CPF
function validaCPF(){
    if (validaCPF("576.524.020-85")){
    console.log("CPF válido")
    }
    else
    console.log("CPF inválido")
}

// AULA 1 (PARTE FINAL):

var nomeDoAluno = "Caio"
var nomesDosPresentes = ["Caio","Pedro","Maria","André"]

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
if (nomesDosPresentes.indexOf(nomeDoAluno)!= -1){
return true}
else{
return false}}
estavaPresenteNaAula(nomeDoAluno)


// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta

function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');
    const d = new Date();
    console.log(d)
    const anoAtual = d.getFullYear();
    console.log(anoAtual)
    const mesAtual = d.getMonth() + 1;
    console.log(mesAtual)
    const diaAtual = d.getDate();
    console.log(diaAtual)
    ano = +ano; 
    mes = +mes; 
    dia = +dia;
    let quantosAnos = anoAtual - ano;
    console.log(quantosAnos)
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
        console.log(quantosAnos--)
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
    console.log(quantosAnos < 0 ? 0 : quantosAnos)
 }

console.log(calcularIdade([22,/04,/2000]));
  
 // Escreva aqui sua função

function deixaEntrar(calcularIdade, censura){
    if (calcularIdade>=censura){
        return true;
    }else{
        return false;
    }
}

console.log(deixaEntrar(22/04/2000,18));

//_______________________________________________________________________________________________________________________________________________________________________________
// AULA 2 (PARTE 1):

var listaDePares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var listaDeFilmes = ['A Sociedade do Anel', 'As Duas Torres', 'O Retorno do Rei']

//PERGUNTAR SOBRE:
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno)

var listaDeFrutas = [ "banana", "uva", "laranja" ]
var quantidadeDeFrutas = listaDeFrutas.length

console.log(quantidadeDeFrutas)

//_______________________________________________________________________________________________________________________________________________________________________________
// AULA AO VIVO 2:

var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5
var quantidadeDeTrabalhos = 4

var media = ((trabalhoDeCiencia + trabalhoDeGeografia + trabalhoDeHistoria + trabalhoDeMatematica)/quantidadeDeTrabalhos);

if(media>7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")}


console.log('média:', media)

var trabalhos1 = [8,7,10,9.5,4]
var trabalhos2 = []
//var pegarElemento33 = trabalhos1.pop()
sum=0

function mediaDeTrabalhos (trabalhos1,trabalhos2){
    for (var i = 0; i < trabalhos1.length; i++) {

        //console.log((sum += trabalhos1[i]).push(trabalhos2))

    trabalhos2.push(sum += trabalhos1[i])
    console.log(trabalhos2)
    }
    var mediaNota = (trabalhos2.length-1/trabalhos1.length)
    if(mediaNota<7){
            console.log("Aprovado")
        }else{
            console.log("Reprovado")
    }
}
//mediaDeTrabalhos
//console.log(mediaDeTrabalhos)

mediaDeTrabalhos(trabalhos1,trabalhos2)

var saldo = 105.5
    if (saldo > 0){
        console.log('Seu saldo está positivo! Gostaria de fazer um investimento?')
    }
saldo = -105.5
    if (saldo < 0){
        console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')
    }

var estrangeiro = true

if (estrangeiro){
    console.log('Você poderia apresentar seu CPF, por favor?')
}else{
    console.log('Você poderia apresentar seu RNE, por favor?')
}

//PERGUNTAR SOBRE: - RESPOSTA: Para verificar se um número é par, basta fazer a expressão do número dividido por 2 e verificar se o resto é igual à 0 (zero). Exemplo: (42 % 2 == 0)
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno)

var numeroDaSorte = 18

if (numeroDaSorte % 2 == 0){
    console.log('Par')
}else{
    console.log('ímpar')
}

var petPeso = 7

if (petPeso < 4){
    console.log('Abaixo do Peso')
}else if(petPeso > 10){
    console.log('Acima do Peso')
}else{
    console.log('Peso normal')
}

//var diaSemana = 'sabado'

const dataHj = new Date()

//console.log(dataHj.getDay())

var diaSemana = dataHj.getDay()
console.log(diaSemana)

//if(diaSemana!="domingo" && diaSemana!="sabado"){
//    console.log('Você pode ir ao banco')
//}else{
//    console.log('O banco está fechado, tente outro dia')
//}

if(diaSemana!= 6 && diaSemana!= 7){
    console.log('Você pode ir ao banco')
}else{
    console.log('O banco está fechado, tente outro dia')
}

function tabuadaDoSete(){
    for (var i = 1; i <=10; i++){
        console.log("7 x " + i + " = " + 7*i)
    }
}


tabuadaDoSete()

//_______________________________________________________________________________________________________________________________________________________________________________
// Retomando Aula 2 (Parte 1):

var listaDeGanhos = [10, 30, -10, -5, -1, 40]

var totalNegativos = 0

for ( var i = 0;  i < listaDeGanhos.length; i++){

    if ( listaDeGanhos[i] < 0 ){
        totalNegativos++ // Acrescentando no total
        console.log(listaDeGanhos[i]) // Mostrando quanto foi
    }
}

// Mostre após o loop
console.log(totalNegativos)

var x9 = [ "Laranja", "Uva", "Limão", "Banana" ]
var contax = x9.length

function quantosElementos (x){
    return console.log('Esse array tem ' + contax + ' elementos')}

quantosElementos()

//AULA 2 (PARTE 2):

function imprimir5Vezes(){
    for (var i = 1; i <= 5; i++){
        console.log('Estou aprendendo Loops')
    }
}

imprimir5Vezes()

function passoAPasso (){
    for (var i = 0; i <= 5; i++){
        console.log(+i)
    }
}

passoAPasso()

function RoboDoBomDia (){
    for (var i = 1; i <= 7; i++){
        console.log('Bom dia, grupo!')
    }
}

RoboDoBomDia()

var listaDeFrutas5 = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";

for ( var i = 0;  i < listaDeFrutas5.length; i++){

    if ( listaDeFrutas5[i] == busca ){
        console.log('Sim, temos a fruta disponível')
    }
}

var cartela = [8, 13, 18, 22, 42, 49];
var numeroSorteado = 42;

for (var i = 0; cartela.length; i++){
    if (cartela[i] == numeroSorteado){
        console.log('Encontrei o número!')
        break
    }
}

function pares (){
    for (var i = 0; i <= 20; i++){
    if(i%2 == 0)
    console.log(i)
        continue //caso use o break ele irá parar no 1º valor par
    }
}

pares()

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

function sobreNome2 (){
    for (i = 0; i < familia.length; i++){
        if(familia[i] == 'Pedro'){
            console.log(familia[i] + ' Sousa')
            continue
        }
        console.log(familia[i] + ' Macedo')
    }
}

sobreNome2()

var baralho = ["Ás", "Dama", "Rei", "Valete"];

for (var i = 0; baralho.length; i++){
    if (baralho[i] == 'Rei'){
        console.log('Encontrei o Rei!')
        break
    }
}


// AULA AO VIVO 3:

function osPares (){
    for (var i = 1; i <=6; i++){
        if(i%2==0){
            console.log(' O numero ' + i +' é par')
        }
    }
}

osPares()

function imprimirAzul (xAzul){
    for (var i = 1; i <= xAzul; i++){
        console.log('Azul')
    }
}

imprimirAzul(3)

// Variável dentro ou fora da função da certo !!! Porém no PG só aceita dentro 
var sum = 0
function somaDosPares(xN){
    //sum = 0  
    for(var i = 0; i <= xN; i++){
        if (i%2==0){
            sum += i
        }
    }
    return sum
 }

console.log(somaDosPares(10))

//Mover item 1

var arrayA = [1,2,3]
var arrayB = [4,5]
var pegarElemento = arrayA.pop()

function moverItem1(arrayA, arrayB){
    arrayB.push(pegarElemento)
    return arrayB
}
console.log(moverItem1(arrayA,arrayB))

//Mover item 2

var ing1 = ['banana', 'goiaba']
var ing2 = ['melão','maçã']
var ultimoElemento = ing1.pop()

function moverItem52(ing1,ing2){
    ing2.push(ultimoElemento)
    return ing2
}
console.log(moverItem52(ing1, ing2))

//Mover Item PROF.: 

var arrayA1 = [1,2,3]
var arrayB1 = [4,5]
function moverItem5(arrayA1, arrayB1){
    var pegarElemento = arrayA1.pop()
    arrayB1.push(pegarElemento)
    return arrayB1
  }
console.log(moverItem5([1,2,3],[4,5]))

// Lista de carros:
var listaDeCarrosE = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]

function carrosLista(){
    for (var i = 0; i < listaDeCarrosE.length; i++){
        console.log("Nome do Carro: " + listaDeCarrosE[i])
    }
}

carrosLista()


var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0

function somaLucro (){
    var otherArray = []                                 //add
    for ( var i = 0;  i < listaDeLucro.length; i++){    
        otherArray.push(lucroTotal += listaDeLucro[i])  //add - lucroTotal += listaDeLucro[i]
            //lucroTotal++
            //console.log(lucroTotal)
            //console.log(otherArray) // add
    }
    console.log(otherArray)
}

somaLucro()

var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']

function listarProdutos (){
    var arrayListaNova = []           //add
    for(var i = 0; i < lista.length; i++){
        arrayListaNova.push(lista[i]) //add
        //console.log(arrayListaNova)  // add
        //console.log(lista[i])
    }
    console.log(arrayListaNova) //add
}

listarProdutos()

var numeros0 = [10, 4, 7, 128, 42, -1, 0, 300, -5]
var num0 = 5

function maiorQueNum(numeros, num){
    var newArray =[];
    for(var i=0; i < numeros0.length; i++){
        if(numeros[i] > num){
            newArray.push(numeros[i])
        }
    }return newArray
}
console.log(maiorQueNum(numeros0,num0))


// RETOMANDO AULA 2:

function agregandoSabor (ingredientes1, ingredientes2){
    ingredientes1.push(ingredientes2)
    return ingredientes1
}

console.log(agregandoSabor(['Leite','Farinha'],['Pão']))

// AULA 3 (PARTE 1): Demonstrando seus conhecimentos 1!

var moradores = ["Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"]

function moradoresPares(){
    for (var i = 0; i < moradores.length; i++){
        if(i%2 == 0){
            console.log('o morador ' + moradores[i] + ' pode usar o elevador')
        }
    }
}

moradoresPares()

//perguntar para prof.

//var arrayTeste = ['Caio', 21, 171]

function maiorAlto(arrayTeste) {
    if ( arrayTeste[1] >= 18 && arrayTeste[2] >= 170) {
        return true
    } else {
        return false
    }
}

console.log(maiorAlto(['Caio', 21, 171]))


// TENTE IMPRIMIR: 
var arrayTeste2 = [0, 9, 4, 7, 128, 42, -1, 301, -5]

var numArray = 3


//DEU CERTO - 

function buscarDivisivelPor(arrayTeste2, numArray){
    for (var i = 0; i < arrayTeste2.length; i++){
        if ((arrayTeste2[i] % numArray == 0) && (arrayTeste2[i] != 0)){
            return arrayTeste2[i]
            break
        }
    } 
    return 'Nenhum número válido encontrado!'
}

//TESTE - imprimindo

function buscarDivisivelPorTESTE(arrayTeste2, numArray){
    for (var i = 0; i < arrayTeste2.length; i++){
        if ((arrayTeste2[i] % numArray == 0) && (arrayTeste2[i] != 0)){
            return (console.log (arrayTeste2[i]))
            break
        } //else{
            //console.log('Nenhum número válido encontrado!')
            
            //break
        //}
    }
    return (console.log('Nenhum número válido encontrado!'))
}

buscarDivisivelPorTESTE(arrayTeste2, numArray)

var alunos13 = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB=[]
var grupoC =[]

function academia(alunos13) {
    for(var i = 0; i < alunos13.length; i++){
        if(alunos13[i] >= 150 && alunos13[i] <= 159){
            grupoA.push(alunos13[i])
        }else if(alunos13[i] >=160 && alunos13[i] <=169){
            grupoB.push(alunos13[i])
        }else{
            grupoC.push(alunos13[i])
        }
    }
    //console.log('GrupoA: '+ grupoA,'GrupoB: '+ grupoB,'GrupoC: '+  grupoC)
}

academia(alunos13)

const TESTES = require('./TESTES');
console.log(TESTES)

let verdadeiro
verdadeiro = true

let nada
nada = null

let texto 
texto = 'string'

let numero
numero = 2

let alunos = ["João", "Pedro", "Jorge", "Francisco"]

var indiceJoao = alunos.indexOf('João')
var indiceFrancisco = alunos.indexOf('Francisco')



const arrayAr = [1,2,3,4,5,6,7,8]

const metodoMap = array.map((numero))

// Seu código vem aqui
var palavras22 = ["caio","lima","sousa"]
function transformaParaMaiusculo(palavras22){
    var arrayA223 =[]
    for(var i = 0; i < palavras22.length; i++){
    arrayA223.push(palavras22[i].toUpperCase())
    }//console.log(arrayA223)
    return arrayA223
}console.log(transformaParaMaiusculo(palavras22))



var carrinhoDeCompras = [
    'Pão',
    'Leite',
    'Queijo',
    'Arroz',
    'Feijão',
    'Macarrão',
    'Manteiga'
  ]
  
var teste = 10
function carrinho(carrinhoDeCompras){
    var array = []
    for(i = 0; i < carrinhoDeCompras.length; i++){
        array.push(teste -= carrinhoDeCompras.length)}
    if(carrinhoDeCompras.length >= 10){
        console.log('Você ganhou frete grátis')
    }else{ 
        console.log('faltam ' + array[0] + ' itens para ganhar o frete grátis') 
    //console.log(`O item na posiçao ${i} é: ${carrinhoDeCompras[i]}`)
    }
}
carrinho(carrinhoDeCompras)

//EX. das placas
/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
    'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525'
 ]

function calcularNumeroDeEntradas(placa){
    // Seu código vem aqui...
    var entrada = 0
    for (let i=0; i < placas.length; i++) {

        let placaDavez = placas[i]        
        if (placaDavez == placa) {
            entrada++
        //entradas += 1
        
        } 
        
    }//console.log(entradas)
    return entrada
}

console.log(calcularNumeroDeEntradas('AKX-3333'))
  
function calcularValorDevido(placa){
   // Seu código vem aqui...
   var entrada = calcularNumeroDeEntradas(placa)
   if (entrada <= 20) {
    return entrada * 10
    } else {
        return (200 + 5 *(entrada-20))
    }
     // return entrada
} 

console.log(calcularValorDevido('AKX-3333'))

//TESTE
let ehValido = cpf.isValid(cpfDigitado);
if(ehValido){
    //  2a - Se for válido, salvar o cpf num arquivo
    console.log(`${cpfDigitado} é um CPF válido. Salvando...`);
} else {
    //  2b - Se não for válido, emitir mensagem de erro
    console.error(`${cpfDigitado} não é um CPF válido`);
}


