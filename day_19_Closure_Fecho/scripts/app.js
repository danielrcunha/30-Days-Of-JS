/*function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunction = outerFunction()

console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())*/

function somaMais() {
    function auxiliar(valor) {
        return 10 + valor
    }
    return {
        somaMais5() {
            return auxiliar(5);
        },
        somaMais7() {
            return auxiliar(7);
        },
        somaMais10() {
            return auxiliar(10);
        }
    }
}

var soma = somaMais();
console.log(soma);

console.log(soma.somaMais5())
console.log(soma.somaMais7())
console.log(soma.somaMais10())