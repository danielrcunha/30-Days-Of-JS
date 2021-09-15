/*FIND: retorna o primeiro elemento que satisfazer o teste*/

//APOIO: https://www.youtube.com/watch?v=szXPNFjVKzI&list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7-&index=6

const countries = ['Brasil', 'Bolivia', 'Denmark', 'Norway', 'Iceland']
console.log('FUNÇÃO FIND:(Achar)')

const recebeCountries = countries.find(c => c.startsWith('B'))
/*O método startsWith() determina se uma string começa com os caracteres especificados, retornando true ou false.*/
console.log(recebeCountries)


