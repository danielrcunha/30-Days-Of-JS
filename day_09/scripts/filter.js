/*fILTER : Utilizado para quando se quer remover um elemento do array */


//APOIO: https://www.youtube.com/watch?v=sDXkvb_rVxA&list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7-&index=2

console.log('FUNÇÃO FILTER(Filtrar)')
const nomesFilter = ['Daniel', 'Miguel', 'Joelma', 'Julia']
const recebeNomesFilter = nomesFilter.filter((nomesFilter) => nomesFilter.includes('el'))
console.log('Nomes:' +recebeNomesFilter)

