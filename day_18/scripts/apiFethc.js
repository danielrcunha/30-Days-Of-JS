/*
API's:https://www.programmableweb.com/news/top-10-countries-apis/brief/2020/08/30
API's:https://medium.com/reactbrasil/10-apis-gr%C3%A1tis-e-legais-para-voc%C3%AA-consumir-69141988ea0b
API's:https://www.digitalhouse.com/br/blog/apis-mais-usadas-por-desenvolvedores-programacao
API's:https://computerworld.com.br/plataformas/13-apis-publicas-fundamentais-para-desenvolvedores/
*/

const url = 'https://restcountries.eu/rest/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens

  //

  
  const square = async function (n) {
    return n * n
  }
  
  square(2)


  //

  //DUVIDA: QUANDO RODA ESSA DA UM ERRO, "Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules"!
  const square_ = async function (n) {
    return n * n
  }
  const value2 = await square_(2)

  //
  const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

  //
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await')
  fetchData()
  
  
  

