/*01. Declare a variable named challenge and assign it to an initial value 30 Days Of JavaScript.*/
let desafio = '30 dias de JavaScript'
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let parte1 = '30 dias de'
let parte2 = 'JavaScript'
let n2_exer01 = 'Não há exercício melhor para o coração do que estender a mão e erguer as pessoas.  por John Holmes nos ensina a ajudar uns aos outros.'
let n2_exer02 = '"Love is not patronizing and charity isnt about pity, it is about love. Charity and love are the same -- with charity you give love, so dont just give money but reach out your hand instead.'
let num = '9.8'
let numInt = parseFloat(num)
let n2_exer05 = 'python'
let n2_exer06 = 'Espero que este curso não esteja cheio de jargões'
let numAleatorio
let n2_exer12 = 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
                   


console.log('02.Teste:', desafio)
console.log('03.Tamanho da String: '+desafio.length)
console.log('04.toUpperCase(maiúscula): '+desafio.toUpperCase())
console.log('05.toLowerCase(Em minúscula): '+desafio.toLowerCase())
console.log('06.Parte da palavra(Substr()):' +desafio.substr(0,7))
console.log('07.Parte da palavra(Substr()):' +desafio.substr(3,4))
console.log('08.Verificando(include()):' +desafio.includes('Script'))
console.log('09.Dividindo com método split:' +desafio.split(""))
console.log('10.Dividindo com método split(espaço):' +desafio.split(" "))
console.log('11.Dividindo com método split(array):' +empresas.split(","))
console.log('12.Substituir string: ' +desafio.replace("JavaScript", "Python"))
console.log('13.15° string de "30 Dias de JavaScript":' +desafio.charAt(15))
console.log('14.Posição do J: '+desafio.charCodeAt(15))
console.log('15.Posição do "a" em "30 Dias de JavaScript":' +desafio.indexOf("a"))
console.log('16.última ocorrência em 30 dias de JavaScript com lastIndexOf(): '+desafio.lastIndexOf('a'))
console.log('17.Achar a ocorrencia da palavra "porque" com indexOf()'+desafio.indexOf("porque"))
console.log('18.Achar a ocorrência da palavra "porque" com lastIndexOf(): '+desafio.lastIndexOf("porque"))
console.log('19.Localizar palavra "porque" com search()' +desafio.search("porque"))
console.log('20.Remover espaço em branco: ' +desafio.trim())
console.log('21.True or False com "startsWith()": ' +desafio.startsWith('30 dias'))
console.log('22.True or False com "endsWith()": ' +desafio.endsWith('30 dias'))
console.log('23.Encontrar todos os "as" com o "match()":' +desafio.match('as'))
console.log('24.Concatenar usando o concat(): ' +parte1.concat(' ','JavaScript'))
console.log('25."30 Dias de JavaScript" 2x com repeat(): ' +desafio.repeat(2))
console.log('01.n2.Imprimir frase de John Holmes: ' +n2_exer01)
console.log('02.n2.Imprimir frase de Madre Teresa: ' +n2_exer02)

//3
console.log('03.n2."10" é exatamente igual a 10:' +typeof '10' === 10)  
console.log(parseInt('10') === 10)

//4
console.log(num === '10')
let num2 = 0.2
console.log(parseFloat(num))
console.log(parseFloat(num2))
console.log(parseFloat(num)+parseFloat(num2)===10)

//05. Verifique se 'on' é encontrado tanto em python quanto em jargão
console.log('Python'.includes('on'))
console.log('jargon'.includes('on'))

//06.Espero que este curso não esteja cheio de jargões . Verifique se há jargão na frase.
console.log(n2_exer06.includes('jargão'))

//07.Gere um número aleatório entre 0 e 100 inclusive.
console.log(Math.floor(Math.random() * 100) +0)

//08 Gere um número aleatório entre 50 e 100 inclusive.
console.log(Math.floor(Math.random() * 100) + 50)
            
//09 Gere um número aleatório entre 0 e 255, inclusive.
//console.log(Math.floor(Math.random() * 255))
console.log(Math.floor(Math.random() * 255) +0)

//10. Acesse os caracteres da string 'JavaScript' usando um número aleatório.
console.log(parte2.charAt((Math.floor(Math.random() * 10) +1)))

//11. Use console.log () e caracteres de escape para imprimir o seguinte padrão.

console.log(1,  1,  1,  1,  1 ) 
console.log(2,  1,  2,  4,  8 )
console.log(3,  1,  3,  9,  27  )
console.log(4,  1,  4,  16, 64  )
console.log(5,  1,  5,  25, 125 )

//12.Use substr para cortar a frase porque porque porque da seguinte frase: 
//'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(n2_exer12.replace('porque porque porque',''))













    /*let endereço = 'Rua dos Pinheiros'
    console.log(`Eu moro na "${endereço}"`);    */