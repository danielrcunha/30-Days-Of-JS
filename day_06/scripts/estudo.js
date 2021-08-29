//FOR LOOP
console.log("De 0...5")
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

//FOR LOOP 
console.log(" \n De 5...0")
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

//FOR LOOP
console.log("USAndo o ${i}")
for (let i = 0; i <= 5; i++) {
    console.log(`${i } * ${ i} = ${i * i}`)
}

//FOR LOOP COM ARRAY
console.log("FOR LOOP COM ARRAY ---------------------------------------------------|")
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(""+newArr)

//FOR LOOP, SOMANDO COM ARRAY
console.log("FOR LOOP, SOMANDO COM ARRAY-------------------------------------------|")
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum +numbers[i];
}
console.log(""+sum)

//FOR LOOP, SOMANDO COM ARRAY
console.log("Creating a new array based on the existing array----------------------|")
const numbers2 = [1, 2, 3, 4, 5]
const newNumbers2 = []
let sum2 = 0
for (let i = 0; i < numbers2.length; i++) {
    newNumbers2.push(i * i)
}
console.log(""+newNumbers2)

//CONVERTENTO DADOS PARA MAIUSCULO
console.log("convertente dados para maiusculo -------------------------------------|")
const paises = ['Argentina', 'Brasil', 'Chile', 'Dinamarca', 'Eslovenia']
const newArray = []

for (let i = 0; i < paises.length; i++) {
 newArray.push(paises[i].toUpperCase())   
}

console.log("Paises: "+newArray)

//WHILE
console.log("WHILE--------------------------- -------------------------------------|")
let i = 0
while (i <= 5) {
    console.log(":"+i)
    i++
}

//DO WHILE
console.log("WHILE LOOP------------------------------------------------------------|")
let j = 0;
do{
 console.log(j)
 j++
} while (j <= 5)

//FOR OF LOOP
console.log("FOR OF LOOP-----------------------------------------------------------|")
const numbers3 = [1, 2, 3, 4, 5]

for (const num3 of numbers3) {
  console.log(num3)
}

for (const num3 of numbers3) {
    console.log(num3 * num3)
}
  
  // 1 4 9 16 25
  
  // adding all the numbers in the array
  let sum3 = 0
  for (const num3 of numbers3) {
    sum3 += sum3 + num3  // can be also shorten like this, sum += num
  }
  console.log(sum3) // 15


  















