const dividir = require('./op/dividir')
const somar = require('./op/somar')
const subtrair = require('./op/subtrair')


///const somar = 5+ 4 
//const dividir = 9/3
//const multiplicar = 2*10
//const subtrair = 90 -40 

//console.log(somar)
//console.log(dividir)
//console.log(multiplicar)
//console.log(subtrair)

// const fs = require('fs') - não precisa 

const totalSoma = somar(8,2)

console.log(totalSoma)
console.log(dividir(4,2))
console.log(subtrair(4,2))
