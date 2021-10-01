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

class Person {
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
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())

console.log(person1.pontuacao)
console.log(person1.habilidades)

console.log(person2.pontuacao)
console.log(person2.habilidades)

PAREI NO getter