console.log('EXERCICO 01 N1')
const c = new Set()
console.log(c)

console.log('\nEXERCICO 01 N2')
const nums = [1,2,3,4,5,6,7,8,9,10]

const setOfNums = new Set(nums)

for(const num of setOfNums){
  console.log(num)
}

console.log('\nEXERCICO 03 N1 - Remova um elemento de um conjunto')
console.log('Antes: '+setOfNums.size)
console.log(setOfNums.delete(1))
console.log('Depois: '+setOfNums.size)

console.log('\nEXERCICIO 04 N1 - Limpar um conjunto')
console.log('Antes: '+setOfNums.size)
setOfNums.clear()
console.log('depois:' +setOfNums.size)

console.log('\nEXERCICIO 05 N1 - Crie um conjunto de 5 elementos de string da matriz')
const cores =[
  ['preto','branco'],
  ['azul','amarelo'],
  ['verde','verde claro'],
  ['vermelho','marrom'],
  ['violeta','alfazema'],
]

console.log(cores)

console.log('\nEXERCICIO 06 N1 - Crie um mapa de países e número de caracteres de um país')
paises = [
  ['Brasil', '6'],
  ['Argentina', '9'],
  ['Peru', '4'],
]

const map = new Map(paises)
console.log(map)

