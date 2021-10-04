/*
class Person {
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
*/

/*//
class Person {
    constructor(
        firstName = 'Asabeneh',
        lastName = 'Yetayeh',
        age = 250,
        country = 'Finland',
        city = 'Helsinki',
        car = 'Fusca'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.car = car
    }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
*/

/*
class Person {
    constructor(fistname, lastname, age, country, city) {
        this.fistname = fistname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.fistname + " " + this.lastname
        return fullName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
*/

/*class Person {
    constructor(fistname, lastname, age, country, city) {
        this.fistname = fistname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
        this.pontuacao = 0
        this.habilidades = []
    }
    getFullName() {
        const fullName = this.fistname + " " + this.lastname
        return fullName
    }

    getPontuacao() {
        const fullPontuacao = this.pontuacao
        return fullPontuacao
    }

    getHabilidades() {
        const fullHabilidade = this.habilidades
        return fullHabilidade
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())

console.log("Pontuação Pessoa 01: " + person1.pontuacao)
console.log("Pontuação Pessoa 02: " + person2.pontuacao)

console.log("Habilidades Pessoa 01: " + person1.habilidades)
console.log("Habilidades Pessoa 02: " + person2.habilidades)
*/

/*===============================================================================
SETTER - NORMALIZADOR
O método setter nos permite modificar o valor de certas propriedades. 
Escrevemos um método setter usando um conjunto de palavras-chave seguido por uma função
*/

/*class Person {
    constructor(fistname, lastname, age, country, city) {
        this.fistname = fistname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
        this.pontuacao = 0
        this.habilidades = []
    }
    getFullName() {
        const fullName = this.fistname + " " + this.lastname
        return fullName
    }

    getPontuacao() {
        const fullPontuacao = this.pontuacao
        return fullPontuacao
    }

    getHabilidades() {
        const fullHabilidade = this.habilidades
        return fullHabilidade
    }

    set setPontuacao(pontuacao) {
        this.pontuacao += pontuacao
    }

    set setHabilidades(habilidades) {
        this.habilidades += habilidades
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setPontuacao = 1
person1.setHabilidades = 'HTML, '
person1.setHabilidades = 'CSS, '
person1.setHabilidades = 'JavaScript'

person2.setPontuacao = 1
person2.setHabilidades = 'Planning, '
person2.setHabilidades = 'Managing, '
person2.setHabilidades = 'Organizing'

console.log("Pontuação Pessoa 01: " + person1.pontuacao)
console.log("Pontuação Pessoa 02: " + person2.pontuacao)

console.log("Habilidades Pessoa 01: " + person1.habilidades)
console.log("Habilidades Pessoa 02: " + person2.habilidades)
*/


class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())



