const renderRecipe = new Renderer()

$(`#btn`).click(function () {
    const inputData = $("#title").val()
    $.get(`/results/${inputData}`, (recipeWithIngredient) => {
            // return players[i]
            console.log(recipeWithIngredient)
            renderRecipe.renderRecipe(recipeWithIngredient)
        
    })
        
})