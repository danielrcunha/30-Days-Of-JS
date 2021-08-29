// função sem parâmetro, uma função que faz um quadrado de número 
function square(){
  let num = 2
  resultado = 2*2
  console.log(resultado)
}
square()

// função sem parâmetro
function SomadoisNumeros(params) {
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    console.log(sum)
} 
SomadoisNumeros()

function nomeCompleto() {
    let primeiroNome = "Daniel"
    let segundoNome = "Cunha"

    let nomeCompletox = primeiroNome+" "+segundoNome
    console.log(nomeCompletox)
} nomeCompleto()


function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log("areaOfCircle "+areaOfCircle(10)) 

function quadrado(num) {
    return num * num
}console.log(quadrado(10))

console.log("\nFUNCTION WITH TWO PARAMETERS")
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions

console.log("\nFUNCTION WITH MANY(VÁRIOS) PARAMETERS")
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));

  const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use an a parameter followed by spread operator
    console.log(args)
   }
   
   sumAllNums(1, 2, 3, 4)























