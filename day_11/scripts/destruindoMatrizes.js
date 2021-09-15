console.log('const numbers = [1, 2, 3] \nlet [numOne, numTwo, numThree] = numbers \nconsole.log(numOne, numTwo, numThree)')

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log('REPS:'+numOne, numTwo, numThree)

console.log('\nconst names = ["Asabeneh", "Brook", "David", "John"]\nlet [firstPerson, secondPerson, thirdPerson, fourthPerson] = names \nconsole.log(firstPerson, secondPerson,thirdPerson, fourthPerson)')
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log('REPS: '+firstPerson, secondPerson,thirdPerson, fourthPerson)

console.log('\nOBJETO DE DESTRUIÇÃO')
console.log('const rectangle = {\nwidth: 20,\nheight: 10,\narea: 200\n}\nlet { width, height, area, perimeter } = rectangle\nconsole.log(width, height, area, perimeter)')

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log('REPS: '+width, height, area, perimeter)
  
  console.log('\nRENOMEANDO DURANTE A ESTRUTURAÇÃO')
  const rectangle2 = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area:a, perimeter:p } = rectangle
  
  console.log('REPS: '+w, h, a, p)