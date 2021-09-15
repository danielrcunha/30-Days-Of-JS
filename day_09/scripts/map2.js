/*map : itera os elementos da matriz e modifica os elementos da matriz. Recebe uma função de 
retorno de chamada com elementos, índice, parâmetro de matriz e retorna uma nova matriz.*/

/*Usar o MAP quando for precciso traduzir ou mapiar todos os elementos de um arrays para outro conjuto de valores*/

/*No exemplo vamos dobrar os valores do array numbers */


//APOIO: https://www.youtube.com/watch?v=o8fdyYZDKA0

console.log('FUNÇÃO MAP(mapa)')

const fahrenheit = [0,32,45,59,75,80,120]
const celsius = fahrenheit.map(function(elem){
    return Math.round((elem - 32)*5/9)
})

console.log('fahrenheit: '+fahrenheit)
console.log('celsius: '+celsius)

console.log('\nFUNÇÃO MAP(mapa) - 2º exemplo')
const fahrenheit2 = [0,32,45,59,75,80,120]
const celsius2 = fahrenheit2.map(elem => Math.round((elem - 32)*5/9))

console.log('fahrenheit: '+fahrenheit2)
console.log('celsius: '+celsius2)