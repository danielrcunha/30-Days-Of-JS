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

//4
let num = parseInt(prompt("Informe o número:"))

if (num % 2 == 0) {
    alert("PAR")
} else {
    alert("IMPAR")
}
*/
//1 - NÍVEL 2
let controle = 0
let pontos

do {
    pontos = parseInt(prompt("Informe a quantidade de pontos: \n80-100 = A, \n70-89 = B, \n60-69 = C, \n50-59 = D, \n 0-49 = F"))


    if ((pontos >= 0) && (pontos <= 49)) {
        alert("Nota: F")
    }
    else if ((pontos >= 50) && (pontos <= 59)) {
        alert("Nota: D")
    }
    else if ((pontos >= 60) && (pontos <= 69)) {
        alert("Nota: C")
    }
    else if ((pontos >= 70) && (pontos <= 89)) {
        alert("Nota: B")
    }
    else if ((pontos >= 80) && (pontos <= 100)) {
        alert("Nota: A")
    }

} while (controle < 1)
alert("FIM")
