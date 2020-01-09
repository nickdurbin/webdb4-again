exports.seed = function(knex) {
  return knex('ingredients')
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Noodles'},
        {id: 2, ingredient_name: 'Orange'},
      ]);
    });
};