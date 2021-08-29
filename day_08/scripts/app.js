//Window Scope ==============================================================||
/*a = 'JavaScript'
b = 10

function letsLearnScope() {
    console.log(a,b)
    if (true) {
        console.log(a,b)
    }
}
console.log('WINDOW SCOPE')
console.log(a,b)*/

//GLOBAL SCOPE ==============================================================||
/*let c = 'JavaScript'
let d = 10

console.log('GLOBAL SCOPE')
function letsLearnScope() {
    console.log(c,d)
    if (true) {
        let c = 'Python'
        let d = 100
        console.log(c,d)
    }
    console.log(c,d)
}
letsLearnScope()
console.log(c,d)*/

//LOCAL SCOPE ==============================================================||
console.log('LOCAL SCOPE')
let e = 'JavaScript' // is a global scope it will be found anywhere in this file
let f = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(e, f) // JavaScript 10, accessible
  let g = 30
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let e = 'Python'
    let f = 20  
    let h = 40
    console.log(e, f, g) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(e, f) // JavaScript 10
}
letsLearnScope()
console.log(e, f) // JavaScript 10, accessible


//VAARIAVEIS ==============================================================||
/*ma variável declarada com var apenas com escopo de função, 
mas a variável declarada com let ou const é o escopo do bloco (bloco de função, se bloco, loop etc).*/

//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 1, 2, 3
  }
  console.log(i)
