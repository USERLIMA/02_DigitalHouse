const arquivo = 'historico-de-cpfs.txt'

function salvarCpf (cpf){
    //Importar a biblioteca FS (biblioteca de manipulação de arquivos e pastas);
    const fs = require('fs');
    fs.appendFileSync(arquivo, cpf + "\r\n");
}

module.exports = salvarCpf;