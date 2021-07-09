/*
//1
let idade = prompt("Informe sua idade:")
const maiorDeIdade = 18
let calcula_idade = maiorDeIdade - idade


if (idade >= 18) {
    alert("Você já pode dirigir")
}
else {
    alert("Ainda não tem idade para dirigir, deve aguardar " + calcula_idade + " ano(s).")
}

//2
let idade_pessoa = prompt("Informe a minha idade: ")
let idade_pessoa2 = prompt("Informe a idade do Bartolomeu:")

if (idade_pessoa > idade_pessoa2) {
    let diferenca = idade_pessoa - idade_pessoa2
    alert("Você tem " + diferenca + " anos a mais que Bartolomeu")
} else if (idade_pessoa < idade_pessoa2) {
    let diferenca2 = idade_pessoa2 - idade_pessoa
    alert("Bartolomeu tem " + diferenca2 + " anos a mais que eu")
} else {
    alert("Bartolomeu e eu temos a mesma idade")
}

//3
let a = prompt("Informe 'A':")
let b = prompt("Informe 'B':")
let opcao = parseInt(prompt("Qual estrutura condicional gostaria de utilizar?\n\n 1 - IF ELSE\n 2 - TERMARY OPERATOR"))
console.log(opcao)

switch (opcao) {
    case 1:
        alert("Sua análise será feita por um 'IF..ELSE'")
        if (a > b) {
            alert("Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo IF..ESLE diz que A é maior que B")
        } else if (a < b) {
            alert("Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo IF..ESLE diz que B é maior que A")
        } else if (a = b) {
            alert("Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo IF..ESLE diz que A é igual que B")
        }
        break
    case 2:
        alert("Sua análise será feita pelo 'OPERADOR TERNÁRIO'")
        console.log(a = b ? "Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo 'OPER. TERNÁRIO' diz que A é igual a B" : console.log(a > b ? "Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo 'OPER. TERNÁRIO' diz que A é maior que B" : "Você informou que A = " + a + " e B = " + b + "\n dessa forma a análise feita pelo 'OPER. TERNÁRIO' diz que B é maior que A"))
        break
    default:
        alert("Você escolheu uma opção invalida!")
}
*/
//4


