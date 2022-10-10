/**
 * Escreva uma função que receba uma pizza como parâmetro
 * e retorne true caso o nome dela comece com a letra P
 * ou false, caso não comece
 */


function comecaComP (pizza){
    //console.log(pizza.nome)

    if (pizza.nome[0] === 'P'){
        return true
    }else{
        return false
    }
}

function temCebola (pizza){
    let incluiCelola = pizza.ingredientes.includes("cebola")
    if (incluiCelola){
        return true
    }else{
        return false
    }
}

function cumpreRequisitos (requisito1, requisito2, pizza){
    let atendeRequisito1 = requisito1(pizza)
    let atendeRequisito2 = requisito2(pizza)
    if(atendeRequisito1 && atendeRequisito2){
        return true
    }else{
        return false
    }
}

let pizzaDeTeste = {
    "id": 11,
    "nome": "Meat & Bacon",
    "ingredientes": [
    "mussarela",
    "calabresa",
    "bacon"
],
    "preco": 38.5,
    "img": "/img/quatroqueijos.jpg",
    "destaque": true
}

let resultado1 = comecaComP(pizzaDeTeste)
console.log(resultado1)
let resultado2 = temCebola(pizzaDeTeste)
console.log(resultado2)
let resultado3 = cumpreRequisitos(comecaComP, temCebola, pizzaDeTeste)
console.log(resultado3)