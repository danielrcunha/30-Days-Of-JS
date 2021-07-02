const now = new Date()
console.log(now)// Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
console.log(now.getFullYear())//ano
console.log(now.getMonth())//mes
console.log(now.getDate())//dia
console.log(now.getDay())//dia
console.log(now.getHours())//horas
console.log(now.getMinutes())//minutos
console.log(now.getSeconds())//segundos

/*Este método fornece o tempo em milissegundos a partir de 1o de janeiro de 1970. 
Também é conhecido como tempo Unix. Podemos obter o tempo unix de duas maneiras:*/
console.log(now.getTime())//número de segundos passados ​​de 1º de janeiro de 1970 a 4 de janeiro de 2020 00:56:41

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


const now_ = new Date()
const year = now_.getFullYear() // return year
const month = now_.getMonth() + 1 // return month(0 - 11)
const date = now_.getDate() // return date (1 - 31)
const hours = now_.getHours() // return number (0 - 23)
const minutes = now_.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56









