//1.
const cachorro = {
    nome: 'Bonitão',
    pernas: 4,
    cor: 'preto',
    idade: 3,
    latido: true,
    raca: 'viralata',
    info: ['forte', 'rapido', 'carinhoso'],


    //com o função é impresso todos os parametro um do lado do outro
    getFullcachorro: function () {
        return `${this.nome}, ${this.pernas}, ${this.cor}, ${this.idade}, ${this.latido}, ${this.raca}, ${this.info}`
    }
}

//2.
/*
console.log(cachorro)
console.log(cachorro.nome)
console.log(cachorro.pernas)
console.log(cachorro.cor)
console.log(cachorro.idade)
console.log(cachorro.latido)
*/

//3.Adicione propriedades de nome, pernas..etc
//retorna os parametros todos juntos
console.log(cachorro.getFullcachorro())

