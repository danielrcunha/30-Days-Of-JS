//ESCOPO LÉXICO
/*
const external = () => {
    const book = 'Estudando JavaScript'

    const internal = () => {
        console.log(book.toLocaleUpperCase())
    }
    internal()
}
external()
*/
//fonte: https://www.youtube.com/watch?v=TyWTvmc1UUU

//===========================

//Closure é um Agrupamento de uma função com seu corpo léxico
/*
const lexical = 'Oi léxico'

const safe = secret => ({
    getSecret: () => secret
})

const privateUserData = 'Dado privado'
const obj = safe(privateUserData)

const func = secret => () => secret
console.log(func(privateUserData)())

const privateUserData2 = 'Outro Dado privado'
const privateUserData3 = 'Mais um Dado privado'

const getSecret2 = func(privateUserData2)
const getSecret3 = func(privateUserData3)

console.log(getSecret2())
console.log(getSecret3())
*/
//===========================

const addTo = a => b => a + b

const increment = addTo(1)
const increment10 = addTo(10)
const increment20 = addTo(20)

console.log(increment(7))
console.log(increment10(7))
console.log(increment20(7))