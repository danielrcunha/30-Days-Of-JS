const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


console.log("||===== NÍVEL 1 ======= QUESTION 01 ==== ESCREVER DE 0 A 10 ======||")

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let x = 0;
while (x < 10) {
    x++;
    console.log(x)
}

let w = 1;
do {    
    console.log(w)
    w++
} while (w <= 10);

console.log("||===== NÍVEL 1 ======= QUESTION 02 ==== ESCREVER DE 10 A 0 ======||")

for (let i2 = 10; i2 >= 0; i2--) {
    console.log(i2)
}

let x2 = 11;
while (x2 >= 1) {
    x2--;
    console.log(x2)
}

let w2 = 10;
do {    
    console.log(w2)
    w2--;
} while (w2 > 0);

console.log("||===== NÍVEL 1 ======= QUESTION 03 ==== ESCREVER DE 0 a N VEZES ======||")

//let n3 = parseInt(prompt("Informe N3:"))
let n3 = 5

for (let i3 = 0; i3 <= n3; i3++) {
    console.log(i3)
}

console.log("||===== NÍVEL 1 ======= QUESTION 04 ==== ESCREVER LOOP P/ # ======||")

console.log("||===== NÍVEL 1 ======= QUESTION 05 ==== TABUADA ======||")
let n5 = 10;
for (let i5 = 0; i5 <= n5; i5++) {
    console.log(`${i5} * ${i5} = ${i5*i5}`)
}

console.log("||===== NÍVEL 1 ======= QUESTION 06 ==== ELEVADO ======||")
let n6 = 10;
for (let i6 = 1; i6 <= n6; i6++) {
    console.log(`${i6}^${2}= `+Math.pow(i6,2)+" | "+`${i6}^${3}= `+Math.pow(i6,3))
}

console.log("||===== NÍVEL 1 ======= QUESTION 07 ==== PRINT PARES de 0 A 100 ======||")
for (let i7 = 0; i7 <= 100; i7++) {
if (i7 % 2 == 0) {
    console.log(i7)
}    
}

console.log("||===== NÍVEL 1 ======= QUESTION 08 ==== PRINT IMPARES de 0 A 100 ======||")
for (let i8 = 0; i8 <= 100; i8++) {
if (i8 % 2 == 1) {
    console.log(i8)
}    
}

console.log("||===== NÍVEL 1 ======= QUESTION 09 ==== PRINT NUM PRIMOS de 0 A 100 ======||")

console.log("||===== NÍVEL 1 ======= QUESTION 10 ==== SOMA DE 0 ATE 100 ================||")

let sum = 0
for (let i10 = 1; i10 <= 5; i10++) { //substituir 0 5 por 100 para  retornar o 5050
    sum = sum+i10;    
    console.log("Num" +i10+":"+sum)
}


console.log("||===== NÍVEL 1 ======= QUESTION 11 ==== SOMA  DOS PARES DE 0 ATE 100 =====||")
let sum11 = 0
let limite11 = 10; //alterar para 100 
for (let i11 = 0; i11 <= limite11; i11++) {
    if (i11 % 2 == 0) {
        //console.log(i11)
        sum11= sum11+i11;
   console.log(i11+":"+sum11)
    }
        
}

console.log("||===== NÍVEL 1 ======= QUESTION 12 ==== SOMA PARES E MATRIZ DE 0 ATE 100 ==||")

console.log("||===== NÍVEL 1 ======= QUESTION 13 ==== 5 NUMS ALEATORIOS =================||")
let num13 = 5
for (let i13 = 0; i13 < num13; i13++) {
    console.log(Math.floor(Math.random(i13)*10))
    //http://devfuria.com.br/javascript/numeros-aleatorios/
}

console.log("||===== NÍVEL 1 ======= QUESTION 14 ==== 5 NUMS ALEATORIOS SEM REPETIR =====||")

console.log("||===== NÍVEL 1 ======= QUESTION 15 ==== GERAR ID ALEATORIO C/ 6 CARACT.====||")

console.log("||===== NÍVEL 2 ======= QUESTION 01 ==== GERAR ID ALEATORIO C/ 6 CARACT.====||")













