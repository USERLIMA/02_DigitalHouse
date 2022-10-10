//filmesDH

//exerciseProgressIcon
//Cinema
//Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:
//
//Escreva uma função calculaGostos(notas)
//
//Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:
//
//O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
//
//O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
//
//O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.

notas = [1, 2, 3, 4, 5]

function calculaGostos(notas){
   var nNaoGostaram = 0;
   var nMediano = 0;
   var nGostaram = 0;
for(var i = 0; i < notas.length; i++){
   if ((notas[i] == 0) || (notas[i] == 1)){
       nNaoGostaram++;
   }else if((notas[i] == 2) || (notas[i] == 3)){
       nMediano++;
   }else{
       nGostaram++;
   }
}return [nNaoGostaram, nMediano, nGostaram];

}



function filme(personagens, filmes, lancamentos, id)

{

 if ((id > 0) && (id <= filmes.length)) {

   var opt = id - 1;

   return personagens[opt] + " é um personagem do filme " + filmes[opt] + " que estreou no cinema em " + lancamentos[opt] + ".";

 }else{

   return "Essa não é uma opção válida.";

 }

}

function comissao(preco,porcentagem){
    var calculoComissao = preco*(porcentagem/100)
    return calculoComissao 
      }
    


      function maiorQueNum(array, num)

      {
      
       var newArray = []
      
       for(var i =0; i < array.length; i ++) {
      
         if(array[i]>num) {
      
           newArray.push(array[i])
      
         }
      
       }
      
      return newArray
      
      }
      

      



      var harryPotterPrefixo = "Harry Potter";

      var harryPotterSeries = [
      
       "e a Pedra Filosofal",
      
       "e a Câmara Secreta",
      
       "e o Prisioneiro de Azkaban",
      
       "e o Cálice de Fogo",
      
       "e a Ordem da Fênix",
      
       "e o Enigma do Príncipe",
      
       "e as Relíquias da Morte"
      
      ];
      
      function series(prefixo, array)
      
      {
      
        var resultado = []
      
       for(var i =0; i < array.length; i ++){
      
           resultado.push(prefixo+ ' ' +  array[i])
      
       }
      
        return  resultado
      
      }
      
      console.log(series(harryPotterPrefixo,harryPotterSeries))