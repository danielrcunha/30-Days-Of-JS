/*REDUCE:  O método reduce() executa a função de callback uma vez para cada elemento presente no array, 
excluindo furos (valores indefinidos), recebendo quatro argumentos:.*/


//APOIO: https://www.youtube.com/watch?v=dckGT8Rts-4&list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7-&index=3

console.log('FUNÇÃO REDUCE(reduzir)')
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((elem, elem2) => elem + elem2, 0)

console.log(sum)

