const db = require('../../../data/db-config')

async function getIngredients() {
  return await db('ingredients')
}

async function getIngredientById(id) {
  return await db('ingredients').where({ id }).first()
}

async function removeIngredient(id) {
  return await db('ingredients')
  .where({ id })
  .del()
}

module.exports = {
  getIngredients,
  getIngredientById,
  removeIngredient,
}