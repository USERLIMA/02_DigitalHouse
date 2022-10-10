var CH = 'cine DH1'

const catalogo = require("./database/catalogo.json")
//console.log(catalogo)

console.log(CH)

function listarTodosOsFilmesAgora () {
    for(let i = 0; i < catalogo.length; i++) {
      console.log(catalogo[i]);
    }
}

listarTodosOsFilmesAgora()

function listarFilmesEmCartaz2() {
    let filmesEmCartaz2 = []
    for(let i = 0; i < catalogo.length; i++) {
      if (catalogo[i].CARTAZ) {
        filmesEmCartaz2.push(catalogo[i])
      }
    }
    return filmesEmCartaz2
}

console.log(listarFilmesEmCartaz2())

var catalogo2 = [
    {
        CODIGO: 2077,
        TITULO: "CYBERPUNK",
        TEMPO: 400.34,
        ATORES: ['Jonhy Silverhand', 'V'],
        LANÇAMENTO: 2021,
        CARTAZ: false,

    },
    {
            CODIGO: 2022,
            TITULO: "MATRIX",
            TEMPO: 3,
            ATORES: 'Nicolas Kage',
            LANÇAMENTO: 2021,
            CARTAZ: true,
    }
]

function adicionarFilme(CODIGO, TITULO, TEMPO, ATORES, LANÇAMENTO, CARTAZ){
    catalogo.push({
        CODIGO,
        TITULO,
        TEMPO,
        ATORES,
        LANÇAMENTO,
        CARTAZ,
    }
    )
}

adicionarFilme(3, 'Lilo St.', 1.5, ['Lilo', 'stc'], 2012, false)

console.log(catalogo)

function buscarFilme (identificador){
    const filme = catalogo.find((objeto) => objeto.CODIGO == identificador)
    return filme
}

//function buscarFilme2 (CODIGO){
//    let filmeEncontrado = []
//    for (let i = 0; i < catalogo.length; i++){
//        if(catalogo[i].CODIGO === CODIGO){
//            filmeEncontrado = catalogo[i]
//        }
//    }
//    return filmeEncontrado
//}

console.log('Seu Filme é:', buscarFilme(2023))



//const alterarStatusEmCatarz = (codigoDoFilme) => {
//    const filmeParaAlterar = catalogo.find((filme) => filme.CODIGO == codigoDoFilme)
//
//    filmeParaAlterar.CARTAZ = !filmeParaAlterar.CARTAZ
//    return filmeParaAlterar
//}

//console.log('Seu filme alterado é: ', alterarStatusEmCatarz(2022))

//console.log(catalogo)

// PARTE 2

function listarTodosOsFilmes () {
    for (let index = 0; index < catalogo.length; index++) {
        console.log(catalogo[index].TITULO)
        //console.log(catalogo[index].TITULO.indexOf('P'))
    }

}

listarTodosOsFilmes()

//console.log(catalogo[0])

//function listarFilmeEmCartaz () {
 //   for (let i=0; i < catalogo.length; i++){
 //       if (catalogo[i].CARTAZ == true){
  //          console.log(catalogo[i])
   //     }
    //}
//}

//listarFilmeEmCartaz()



// function alterarStatusEmCatarz2(CODIGO) {
//    let filmeAlterado
//    for (let i =0; i < catalogo.length; i++)
//    if (catalogo[i].CODIGO = CODIGO) {
//        catalogo[i].CARTAZ = !catalogo[i].CARTAZ
//        filmeAlterado = catalogo[i]
//    }
//    return filmeAlterado
//}

//console.log('Seu filme alterado é: ', alterarStatusEmCatarz2(1))

function alterarStatusEmCatarz3 (CODIGO, buscarFilme2) {
    const filmeEncontrado8 = buscarFilme2 (CODIGO)
    filmeEncontrado8.CARTAZ = !filmeEncontrado8.CARTAZ
    return console.log(filmeEncontrado8)
}

alterarStatusEmCatarz3(2023, buscarFilme)


function listarFilmesLongos (duracaoEmHoras){
    const filmesLongos = catalogo.filter((filmesLongos) => filmesLongos.TEMPO > duracaoEmHoras)
    return filmesLongos
}

const filmesLongos = listarFilmesLongos(30)
console.log('O FILME MAIS LONGO É: ', filmesLongos)

