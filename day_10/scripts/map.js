console.log('Criando um mapa vazio')

//const map = new Map()
//console.log(map)

console.log('Criação de um mapa a partir da array')
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

console.log('\nADD valores ao map')
const countriesMap = new Map()
console.log('qtd antes: '+countriesMap.size)
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log('Qtd depois: '+countriesMap.size)

console.log('\nObtendo um valor do mapa')
console.log(countriesMap.get('Finland'))

console.log('\nChave de verificação no mapa')
console.log(countriesMap.has('Finland'))

console.log('\nObtendo todos os valores do mapa usando loop')
for(const country of countriesMap){
  console.log(country)
}

for(const[country, city] of countriesMap){
  console.log('\n'+ country, city)
}