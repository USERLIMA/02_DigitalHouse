let filmes = require('./dataBase/filme.json');
console.log(filmes[0].TITULO);

let nf = require('./dataBase/notaFiscal.json');
console.log(`
NF número: ${nf.numero}
valor: ${nf.valor}
Primeiro produto: ${nf.produtos[0]}
`)