/*
//1
const arr = Array();
console.log(arr)
//ou com colchetes
const arr2 = [];
console.log(arr2)
*/

/*
//2
const arr = [1, 2, 3, 4, 5]
console.log(arr);
*/

//3
/*
const numeros = [1, 3, 5, 7, 9, 11];
console.log(numeros.length)
*/

//4
/*
const numeros = [1, 3, 5, 7, 9];
console.log(numeros[0], numeros[2], numeros[4])
*/

//5
/*
const mixedDataTypes = ["abacaxi", 2, true, 3, 3.6]
console.log(mixedDataTypes[0], mixedDataTypes[5])
console.log(mixedDataTypes.length + " posições")


//6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)

//9
console.log(itCompanies[0],itCompanies[4],itCompanies[7])

//10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//11 - maisculas


//12
console.log("12. O "+itCompanies.slice(0, 6) +" e "+itCompanies.slice(6) +" são grandes empresas")

//13
console.log("13. com indexOf() - Empresa verificada: "+itCompanies.indexOf("Oracle")+"º posição")

//console.log("13. com indexOf() - Empresa verificada: "+itCompanies.indexOf(prompt("Informe a emppresa: "))+"º posição")
let teste = "IBM"

console.log("Empresa pesquisada: "+teste)
if (itCompanies.indexOf(teste) === -1) {
    console.log("Empresa NÃO cadastrada")
} else {
    console.log("Empresa cadastrada")
}

//14
console.log("14.Ainda não tenho uma solução")

//15
console.log("15. " + itCompanies.sort())

//16
console.log("16. " + itCompanies.reverse())
console.log("16. " + itCompanies.reverse()) //só para organizar

//17
console.log("17. " + itCompanies.splice(0,3))


//18
const itCompanies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("verificando. " + itCompanies2)
console.log("18. " + itCompanies2.splice(4))


//19

//20
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
const itCompaniesAux = itCompanies.shift() 
console.log("Empresas separada: "+itCompaniesAux)
console.log("Empresas: "+itCompanies)
//O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 


 


//22
O método pop remove o último elemento de um array e retorna aquele valor.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
const itCompaniesAux = itCompanies.pop() 
console.log("Empresas separada: "+itCompaniesAux)
console.log("Empresas: "+itCompanies)



//23
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("Empresas: "+itCompanies.splice())
*/


//21 -
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
const itCompaniesAux = itCompanies.splice(Math.floor(itCompanies.length/2),1)
console.log(itCompanies.length)
console.log(Math.floor(itCompanies.length/2))







































