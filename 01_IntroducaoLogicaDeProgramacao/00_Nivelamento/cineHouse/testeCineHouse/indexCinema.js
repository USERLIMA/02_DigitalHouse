const catalogo = [
    {
        CODIGO: "2077",
        TITULO: "CYBERPUNK",
        TEMPO: 400,
        ATORES: 'Jonhy Silverhand',
        LANÇAMENTO: 2021,
        CARTAZ: false,

    },
    {
            CODIGO: "2022",
            TITULO: "MATRIZ",
            TEMPO: 3,
            ATORES: 'Nicolas Kage',
            LANÇAMENTO: 2021,
            CARTAZ: true,
    }
]

module.exports = catalogo;

function adicionarFilme (nomeTitulo, nomeCartaz) {
    this.TITULO = nomeTitulo
    this.CARTAZ = nomeCartaz
}

//console.log(adicionarFilme)
console.log(new adicionarFilme('GOD OF WAR', false))

//function buscarFilme (nomeTitulo) {
//    return console.log(catalogo[0])
//}




