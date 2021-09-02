//CALLBACK
function exibir(num) {
    console.log(num);
}

function soma(a, b, CALLBACK) {
    var op = a + b;
    CALLBACK(op)
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    console.log(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir)





/*const CALLBACK = (n) => {
    return n ** 2;
}

console.log(n ** 2)

function cube(CALLBACK, n) {
    return CALLBACK(n) * n
}


console.log(cube(CALLBACK, 3))
*/