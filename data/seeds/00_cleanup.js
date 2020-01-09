exports.seed = async (knex) => {
  await knex("recipes_ingredients").truncate()
  await knex("recipes").truncate()
  await knex("ingredients").truncate()
}