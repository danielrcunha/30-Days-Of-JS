//01. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let desafio = '30 dias de JavaScript'
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

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


    /*let endereço = 'Rua dos Pinheiros'
    console.log(`Eu moro na "${endereço}"`);    */