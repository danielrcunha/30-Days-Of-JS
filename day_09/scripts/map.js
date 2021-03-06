/*map : itera os elementos da matriz e modifica os elementos da matriz. Recebe uma função de 
retorno de chamada com elementos, índice, parâmetro de matriz e retorna uma nova matriz.*/

/*Usar o MAP quando for precciso traduzir ou mapiar todos os elementos de um arrays para outro conjuto de valores*/

/*No exemplo vamos dobrar os valores do array numbers */


//APOIO: https://www.youtube.com/watch?v=o8fdyYZDKA0

console.log('FUNÇÃO MAP(mapa)')

const numbers = [1,2,3,4,5,6];

const dobraNumeros = numbers.map(function( elem){
    return elem * 2
})

console.log('Array Original: '+ numbers)
console.log('Array Dobro:'+ dobraNumeros)

console.log('\nFUNÇÃO MAP(mapa) - Mesma ideia, mas usando hero function')

const numbers2 = [7,8,9,10,11,12];

const dobraNumeros2 = numbers2.map(num => num * 2)

console.log('Array Original: '+ numbers2)
console.log('Array Dobro:'+ dobraNumeros2)
