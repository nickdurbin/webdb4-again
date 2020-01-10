const recipeRoutes = require('./recipes/recipe-routes')

module.exports = server => {
  server.use("/api/recipes", recipeRoutes)
}