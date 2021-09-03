/*console.log('\nEXEMPLO 01') //não está rodado
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))*/


console.log('\nEXEMPLO 02')
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))

console.log(sum)


console.log('\nEXEMPLO 03')
let sum2 = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num2 => sum2 += num2)

console.log(sum2)

console.log('\nEXEMPLO 04')
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))