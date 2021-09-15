//APOIO: https://www.youtube.com/watch?v=HhaACh5_ey4 
//O SET ELIMINA NUMEROS OU CARACTERES REPETIDOS
/*const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  const setOfLangauges = new Set(languages)
  for(const langauge of setOfLangauges){
  console.log(langauge)
  }

//Adicionando um elemento a um conjunto

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')

console.log(companies.size)
console.log(companies)

const setOfCompanies = new Set(companies)
for(const companie of setOfCompanies){
  console.log(companie)
}

//Excluindo um elemento de um conjunto
console.log(companies.delete('Google'))
console.log(companies.size)

//Verificando um elemento no conjunto
console.log(companies.has('Apple'))
console.log(companies.has('Facebook'))

companies.clear()
console.log(companies)*/

console.log('\nCOUNT:')
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

//Union of sets
console.log('Union of sets')
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
