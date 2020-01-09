exports.seed = function(knex) {
  return knex('recipes')
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Ramen', ingredient_quantity: 3, quantity_type: 'oz', instructions: 'Put in the microwave.'},
        {id: 2, recipe_name: 'Orange', ingredient_quantity: 1, quantity_type: 'Orange', instructions: 'Peel and eat.'}
      ]);
    });
};