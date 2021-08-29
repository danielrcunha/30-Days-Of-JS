console.log("||===== NÍVEL 1 ======= QUESTION 01 ==== FUNCTION NOME COMPLETO ===============||")
function nomeCompleto() {
    let primeiroNome = "Daniel"
    let segundoNome = "Cunha"
    let todoNome = primeiroNome +" "+ segundoNome;
    console.log(todoNome);
}nomeCompleto()

console.log("||===== NÍVEL 1 ======= QUESTION 02 ==== FUNCTION NOME COMPLETO C/ PARAMETRO ==||")
function nomeCompleto2(primeiroNome2, segundoNome2) {
    let todoNome2 = primeiroNome2 +" "+ segundoNome2;
    console.log(todoNome2);
}nomeCompleto("Daniel", "Cunha")

console.log("||===== NÍVEL 1 ======= QUESTION 03 ==== FN SOMA DOIS NUMS C/ PARAMETRO========||")
function fn_soma_num(num1, num2) {
    let sum = num1 + num2
    console.log(`${num1}`+" + "+`${num2}`+" = "+`${num1+num2}`)
}fn_soma_num(2, 3)


console.log("||===== NÍVEL 1 ======= QUESTION 04 ==== FN_AREA_RETANGULO ====================||")
function fn_area_retangulo(comprimento, largura) {
    let area=comprimento*largura
    console.log("Área do retangulo = "+area )
}fn_area_retangulo(10, 20)

console.log("||===== NÍVEL 1 ======= QUESTION 05 ==== FN_PERIMETRO_RETANGULO ===============||")
function fn_perimetro_retangulo(comprimento, largura) {
    let perimetro=2*(comprimento*largura)
    console.log("Perimetro do retangulo = "+perimetro )
}fn_perimetro_retangulo(10, 20)

console.log("||===== NÍVEL 1 ======= QUESTION 06 ==== FN_PRISMA_RETANGULO ==================||")
function fn_prisma_retangulo(comprimento, largura, altura) {
    let volume = comprimento*largura*altura
    console.log("Prima Retangulo: "+volume)
} fn_prisma_retangulo(2, 5, 10)

console.log("||===== NÍVEL 1 ======= QUESTION 07 ==== FN_AREA_CIRCULO ======================||")
function fn_area_circulo(pi, r) {
    let area = pi*r*r
    console.log(area)
}fn_area_circulo(3.14,5,5)

console.log("||===== NÍVEL 1 ======= QUESTION 08 ==== FN_CIRCUFERENCIA_CIRCULO =============||")
function fn_circunferencia_circulo(pi){
    let circunferencia_circulo = 2 * pi
    console.log("Circunferencia do circulo: " +circunferencia_circulo)
}fn_circunferencia_circulo(3.14)

console.log("||===== NÍVEL 1 ======= QUESTION 09 ==== FN_DENSIDADE_SUBSTANCIA ==============||")
function fn_densidade_substancia (massa, volume) {
    let densidade = massa / volume
    console.log("densidade: " +densidade)    
}fn_densidade_substancia(100,2)

console.log("||===== NÍVEL 1 ======= QUESTION 10 ==== FN_VELOCIDADE_OBJETO =================||")
function fn_velocidade_objeto(distancia_percorrida, quantidade_tempo) {
    velocidade = distancia_percorrida/quantidade_tempo;
    console.log("Velocidade: "+velocidade)    
}fn_velocidade_objeto(100, 30)

console.log("||===== NÍVEL 1 ======= QUESTION 11 ==== FN_PESO_OBJETO ==================||")
function fn_peso_objeto(massa, gravidade) {
    let peso = massa * gravidade 
    console.log("Peso do Objeto: "+peso)
}fn_peso_objeto(10, 100)

console.log("||===== NÍVEL 1 ======= QUESTION 12 ==== FN_CelciusToFahrenheit ==================||")
function fn_CelciusToFahrenheit(oc) {
    let oF = (oc * 9/5) + 32
    console.log("CelciusToFahrenheit:" +oc)
}fn_CelciusToFahrenheit(100)

console.log("||===== NÍVEL 1 ======= QUESTION 13 ==== FN_IMC ==================||")
function fn_imc(quilo, altura) {
    let imc = quilo / (altura * altura)
    console.log("DADOS INFORMADOS: \nPESO: "+ quilo + "\nALTURA: "+altura)
    console.log("IMC: "+imc.toFixed(2))


if (imc < 18.5) {
    console.log("IMC:" +imc.toFixed(2)+" você está com 'baixo peso'")
}
else if ((imc === 18.5) || (imc <= 24.9)) {
    console.log("IMC:" +imc.toFixed(2)+" você está com 'peso normal'")
}
else if ((imc === 25) || (imc <= 29.9)) {
    console.log("IMC:" +imc.toFixed(2)+" você está com 'sobrepeso'")
}
else if (imc >= 30) {
    console.log("IMC:" +imc.toFixed(2)+" você está com 'obeso'")
}

}fn_imc(92, 1.74)

console.log("||===== NÍVEL 1 ======= QUESTION 14 ==== FN_ESTACAO_ANO ==================||")
let num_mes = parseInt(prompt("QUESTION 14\nInforme o mês: "))
function fn_checkSeason(num_mes) {
    if ((num_mes === 1) || (num_mes === 2) || (num_mes === 3)) {
        console.log("Verão")
    }
    else if ((num_mes === 4) || (num_mes === 5) || (num_mes === 6)) {
        console.log("Outono")
    }
    else if ((num_mes === 7) || (num_mes === 8) || (num_mes === 9)) {
        console.log("Inverno")
    }
    else if ((num_mes === 10) || (num_mes === 11) || (num_mes === 12)) {
        console.log("Primavera")
    }

}fn_checkSeason(num_mes)

console.log("||===== NÍVEL 1 ======= QUESTION 15 ==== FN_RETORNA_MAIOR ==================||")
let a = parseInt(prompt("Informe o 'A': "))
let b = parseInt(prompt("Informe o 'B': "))
let c = parseInt(prompt("Informe o 'C': "))


function fn_retorna_maior(a, b, c) {
if ((a > b) && (a > c)) {
    console.log("Maior número informado foi A = "+a)
}
if ((b > a) && (b > c)) {
    console.log("Maior número informado foi B = "+b)
}
if ((c > a) && (c > b)) {
    console.log("Maior número informado foi C = "+c)
}
if ((c === a) && (c === b) && (a === b)) {
    console.log("A, B e C informados são iguais!")
}
if ((a === b) && (a < c) && (b < c) ) {
    console.log("Maior número informado foi C = "+c)
}

}fn_retorna_maior(a, b, c)

console.log("||===== NÍVEL 2 ======= QUESTION 01 ==== FN_EQUACAO_LINEAR ==================||")
function fn_equacao_linear(by,cc) {
    let ax = by+cc+0;
    console.log("ax: "+ax)    
}fn_equacao_linear(3,4)

console.log("||===== NÍVEL 2 ======= QUESTION 02 ==== FN_xxxxxxxxxxxxx ==================||")
console.log("||===== NÍVEL 2 ======= QUESTION 03 ==== FN_IMPRIME_ARRAY ==================||")
function fn_imprime_array(arr) {
    const arr = [1,2,3,4,5]
    console.log(arr)
        
}fn_imprime_array(arr)







