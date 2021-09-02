// Função de retorno
//Funções de ordem superior retornam função como um valor
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }

    return doSomething
}
console.log(higherOrder(2)(3)(10))


console.log('FUNÇÃO DE RETORNO')
const funcao1 = a => {
    const funcao2 = b => {
        const funcao3 = c => {
            return 2 * a + 3 * b + c
        }
        return funcao3
    }
    return funcao2
}

console.log(funcao1(2)(3)(10))


console.log('FUNÇÃO DE RETORNO - método forEach usa retorno de chamada')
const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    numbers.forEach(function (element) {
        sum += element
    })
    return sum

}
console.log(sumArray(numbers))


