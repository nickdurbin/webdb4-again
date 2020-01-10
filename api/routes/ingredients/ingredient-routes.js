const express = require('express')
const Ingredients = require('./ingredient-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const ingredients = await Ingredients.getIngredients()
    return res.json(ingredients)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const ingredient = await Ingredients.getIngredientById(id)
    return res.json(ingredient)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("ingredients").insert(req.body)
    const newIngredient = await db("ingredients").where('id', id).first()
    return res.status(201).json(newIngredient)
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