const db = require('../../../data/db-config')

async function getInstructions(id) {
  return await db('recipes').select('instructions').where({ id: recipe_id }).first()
}

async function getRecipes() {
  return await db('recipes')
}

async function getRecipeById(id) {
  return await db('recipes').where({ id }).first()
}

async function getShoppingCart(id) {
  return await db('shopping_cart').where({ id }).first()
}

async function removeRecipe(id) {
  return await db('recipes')
  .where({ id })
  .del()
}

async function removeShoppingCart(id) {
  return await db('shopping_cart')
  .where({ id })
  .del()
}

module.exports = {
  getInstructions,
  getRecipes,
  getRecipeById,
  getShoppingCart,
  removeRecipe,
  removeShoppingCart
}