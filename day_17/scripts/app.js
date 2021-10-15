//syntax
localStorage.setItem('key', 'value')

localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

//Storage { firstName: 'Asabeneh', length: 1 }

localStorage.setItem('age', 200)
console.log(localStorage)

//Storage { age: '200', firstName: 'Asabeneh', length: 2 }

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

//Storage { age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3 }

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)


const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)


