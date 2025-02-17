const categories = document.querySelector("#categories")
const listOfCategories = categories.querySelectorAll(".item")
console.log(`Number of categories: ${listOfCategories.length}`)

listOfCategories.forEach((categorie) => {
    const title = categorie.querySelector("h2")
    console.log(`Categorie: ${title.textContent}`)
    const elements = categorie.querySelectorAll("ul > li")
    console.log(`Elements: ${elements.length}`)
})