const urllib = require('urllib')
const path = require('path')

const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const recipeIngredients = {
    "cheese": "cheese",
    "oil": "oil",
    "tomato": "tomato",
}

app.get('{results/:recipes}', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    const recipeName = request.params.recipes
    const recipeResult = recipeIngredients[recipeName]
    // console.log(teamId)



    urllib.request(`https://recipes-goodness.herokuapp.com/results/${recipes}`, function(err, res){
        const recipeWithIngredient = JSON.parse(res.toString()).recipes


    const correctRecipeIngredient = []

    for (let correctIngredient of correctIngredients) {
        if (correctIngredient.recipeResult === recipeResult) {
            const recipeInfo = {
                ingredient:correctIngredient.ingredient,
                pic: `https://recipes-goodness.herokuapp.com/${correctIngredient.ingredient}`
            }
            correctRecipeIngredient.push(recipeInfo)
        }
    }
        response.send(correctRecipeIngredient)
    }) 
})




const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})