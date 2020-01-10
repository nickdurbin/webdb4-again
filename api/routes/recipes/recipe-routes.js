const express = require('express')
const Recipes = require('./recipe-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipes.getRecipes()
    console.log(recipes)
    return res.json(recipes)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const recipe = await Recipes.getRecipeById(id)
    return res.json(recipe)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("recipes").insert(req.body)
    const newRecipe = await db("recipes").where('id', id).first()
    return res.status(201).json(newRecipe)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.delete("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

module.exports = router