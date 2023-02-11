// 1 - Ler o conteúdo do arquivo livros.txt e guardar a string dele em uma
// variável stringLivros (fs, readFileSync)
const fs = require("fs");
let stringLivros = fs.readFileSync("./database/livros.txt",{encoding:'utf-8'});

// 2 - Transformar essa stringLivros num array guardado na variável livros
// Dica: stringLivros.split
let livros = stringLivros.split("\r\n");


function listar(arrayDeLivros) {
    console.table(arrayDeLivros);
}

function adicionar(arrayDeLivros, novoTitulo) {
    if (arrayDeLivros.indexOf(novoTitulo) == -1) {
        arrayDeLivros.push(novoTitulo)
        return true
    } else {
        return false
    }
}

// 3 - Criar uma função "salvar" que salva o array de livros no arquivo
// Para isso, a função deve receber um único parâmetro: o array de livros
// a ser salvo. Ela não deve retornar nada.
function salvar(arrayDeLivros){

    // 1 - Transformar o arrayDeLivros em uma string (arrayDeLivros.join);
    let stringLivros = arrayDeLivros.join("\r\n");

    // 2 - Sobrescrever o conteúdo de livros.txt com a string obtida no passo anterior (fs.writeFileSync)
    fs.writeFileSync("./database/livros.txt", stringLivros);

}


adicionar(livros, "Entendendo Algoritmos 2 - A Missão");
salvar(livros);

listar(livros)