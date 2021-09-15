console.log('QUESTÃO 01 - N1 ========================================||')
console.log('FOREACH: Função JS é uma funcao de objetos do tipo array e serve para execute um bloco de codigo pra cada um os elemtos desse array')
console.log('\nMAP : itera os elementos da matriz e modifica os elementos da matriz. Recebe uma função de retorno de chamada com elementos, índice, parâmetro de matriz e retorna uma nova matriz. Usado quando for precciso traduzir ou mapiar todos os elementos de um arrays para outro conjuto de valores')
console.log('\nFILTER: Quando é necessário remover elementos com base em algumas condiçoes')
console.log('\nREDUCE: ')

console.log('\nQUESTÃO 03 - N1 ======================================||')
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((valorAtual, indice, arrayCompleto) => {console.log(valorAtual, indice, arrayCompleto);})

console.log('\nQUESTÃO 04 - N1 ======================================||')
names.forEach((valorAtual, indice, arrayCompleto) => {console.log(valorAtual, indice, arrayCompleto);})

console.log('\nQUESTÃO 05 - N1 ======================================||')
numbers.forEach((valorAtual, indice, arrayCompleto) => {console.log(valorAtual, indice, arrayCompleto);})

console.log('\nQUESTÃO 06 - N1 ======================================||')
const newCountries = countries.map((elem) => console.log(elem.toUpperCase()))

console.log('\nQUESTÃO 09 - N1 ======================================||')
names.map((elem) => console.log(elem.toUpperCase()))

console.log('\nQUESTÃO 11 - N1 ======================================||')
const recebeCountries = countries.filter((countries) => countries.includes('land'))
console.log('PAISES:' +recebeCountries)

console.log('\nQUESTÃO 12 - N1 ======================================||')
const recebeCountries6 = countries.filter((countries) => countries.length === 6)
console.log('PAISES:' +recebeCountries6)

console.log('\nQUESTÃO 13 - N1 ======================================||')
const recebeCountries6Mais = countries.filter((countries) => countries.length >= 6)
console.log('PAISES:' +recebeCountries6Mais)

console.log('\nQUESTÃO 14 - N1 ======================================||')
const CountriesCom_E = countries.filter((countries) => countries.startsWith('D'))
console.log('PAISES:' +CountriesCom_E)

console.log('\nQUESTÃO 15 - N1 ===========INCORRETO===========================||') 
const recebeProducts = products.filter((products) => products.price = '')
console.log('PRODUTOS:  '+recebeProducts)

console.log('\nQUESTÃO 16 - N1 = REDUCE  ============================||')
const recebeNumbersSoma = numbers.reduce((elem, elem2) => elem + elem2,0)
console.log('SOMA DOS PRODUTOS:' +recebeNumbersSoma)

console.log('\nQUESTÃO 21 - N1 = EVERY  =============================||')
const recebeCountriesEvery = countries.every(elem => typeof elem === 'land')
/*O typeof é um operador unário colocado antes de seu operando, o qual pode 
ser de qualquer tipo. Seu valor é uma string que especifica o tipo do operando.*/
console.log(recebeCountriesEvery)

console.log('\nQUESTÃO 23 - N1 = FIND  ==============================||')
const recebeCountriesFind = countries.find(elem => elem.length === 6)
console.log(recebeCountriesFind)

console.log('\nQUESTÃO 24 - N1 = FINDINDEX  ========REVISAR=================||')
const recebeCountriesFindindex = countries.findIndex((elem) => elem.length <= 6)
console.log(recebeCountriesFindindex)










/*

findIndex
some
sort
*/





































