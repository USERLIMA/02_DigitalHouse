const fs = require('fs');
const pizzas = require('../dataBases/pizzas.json')

function cadastrarPizza(objetoPizza){

    // Descobrir novo id da pizza
    let novoId = (pizzas[pizzas.length - 1]).Id + 1;

    //objetoPizza com os dados estruturados
    let novaPizza = {
        Id: novoId,
        // 123,
        nome:objetoPizza.nome,
        ingredientes: objetoPizza.ingredientes,
        preco: objetoPizza.preco,
        img: objetoPizza.img
        
    }
    //Adicionar o objetoPizza ao final do array usuários (usuarios.push)
    //usuarios.push(objetoPizza);
    pizzas.push(novaPizza);

    //salvar objetoPizza no arquivo
    fs.writeFileSync('./dataBases/pizzas.json', JSON.stringify(pizzas, null, 4)); // <-- JSON.stringify irá transformar um ojeto ou um array em uma string do tipo JSON

}

/*
let pizza = {
    "id": 1,
    "nome": "Calabresa",
    "ingredientes": [
        "mussarela",
        "calabresa",
        "cebola"
    ],
    "preco": 38.5,
    "img": "/img/calabresa.jpg",
    "destaque": true,
    "score": 27
}*/

let pizza = {
    "nome": "Calabresa com alho",
    "ingredientes": [
        "mussarela",
        "calabresa",
        "alho"
    ],
    "preco": 38.5,
    "img": "/img/calabresa.jpg",
}

cadastrarPizza(pizza)