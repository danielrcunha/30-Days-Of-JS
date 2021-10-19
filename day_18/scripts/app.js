//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)
  


const doSomething2 = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 4000)
  }
  
  doSomething2((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })
  
  /*===================================*/

  // syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })

 // Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['javaScript', 'javaScript', 'javaScript']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 6000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

    /**/

    // Promise
const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'HTML', 'HTML']
      if (skills.indexOf('Node') !== -1) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 8000)
  })
  
  doPromise2
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
  
   
    /*===================================*/


