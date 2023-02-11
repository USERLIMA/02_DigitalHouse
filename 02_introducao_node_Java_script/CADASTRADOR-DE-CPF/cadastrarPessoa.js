/*
ALGUNS CPF's PAR TESTE 

893.093.970-35
778.848.800-32
929.508.050-51
694.567.900-45
315.465.360-00

o script deve ser executado com o seguinte comando:

node cadastrarPessoa [cpf] [nomeDaPessoa]

Ele deve testar se o CPF é válido e verificar se o nome da pessoa foi digitado.

Caso esteja tudo OK:

1. Cria um objeto com os dados da pessoa
2. Importa o array de pessoas presentes em pessoas.json
3. Adiciona a nova pessoa ao final do array pessoas
4. Salva esse array de volta no arquivo pessoas.json

*/

// pegar nome e cpf
let nomeDigitado = process.argv[2];
let cpfDigitado = process.argv[3];

// let [node, script, cpfDigitado, nomeDigitado] = process.argv;

// Testar se o cpf é válido e caso não seja, interromper o script com process.exit()

// 2 - Verificar a validade do CPF

const cpf = require('cpf'); // <-- importando a lib(cpf)

//  2a - Se for válido, salvar o cpf num arquivo

let ehValido = cpf.isValid(cpfDigitado);
if(!ehValido){
    console.error(`CPF ${cpfDigitado} não é válido`);
    process.exit();
}

// testar se o nome foi digitado, caso não interrompa o script 
// dica: nomeDigitado == undefined
// console.error(typeof nomeDigitado == undefined)

if(nomeDigitado == undefined){
    console.error("Digite um nome válido");
    process.exit();
}

// 1 - importar o arquivo pessoas.json para uma variável de pessoas 
// 2 - Criar um objeto literal com os dados da pessoa
    // let pessoas = {nome: nomeDigitado; cpf: cpfDigitado}
// 3 - adicionar o objeto pessoas a array de pessoas
// 4 - salvar o array de pessoas no arquivo pessoas.json
    // DICAS:
    // fs.writeFileSync para escrever no arquivo
    // JSON.stringify() para transformar o array pessoas em um uma string
