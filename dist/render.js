class Renderer {
    constructor() {
    }
    renderRecipe = (recipeWithIngredient) => {
        $("#recipe-name").empty()
        for (let correctIngredient of correctIngredients) {
            let showRecipes = `<div class="recipe"><div class="recipe-name">${correctIngredient.ingredient}</div>
           <img class="recipe-pic" src=${correctIngredient.pic} onerror="this.src='https://jollycontrarian.com/images/6/6c/Rickroll.jpg'"></div>` 
            $(`#recipe-name`).append(showRecipes)
        }

    }
}