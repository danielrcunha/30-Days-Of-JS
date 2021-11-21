// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
