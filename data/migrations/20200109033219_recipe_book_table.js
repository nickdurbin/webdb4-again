exports.up = async function(knex) {
  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments()
    tbl.string("ingredient_name", 128)
      .notNullable()
      .unique()
  })
  await knex.schema.createTable("recipes", tbl => {
    tbl.increments()
    tbl.string("recipe_name", 128)
      .notNullable()
    tbl.float('ingredient_quantity')
      .notNullable()
    tbl.string('quantity_type')
      .notNullable()
    tbl.string('instructions')
      .notNullable()
  })
  await knex.schema.createTable("recipes_ingredients", tbl => {
    tbl.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    
    tbl.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    tbl.primary(["ingredient_id", "recipe_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("recipes")
  await knex.schema.dropTableIfExists("ingredients")
};