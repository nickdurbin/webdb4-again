const ingredientRoutes = require('./ingredients/ingredient-routes')
const recipeRoutes = require('./recipes/recipe-routes')

module.exports = server => {
  server.use("/api/ingredients", ingredientRoutes)
  server.use("/api/recipes", recipeRoutes)
}