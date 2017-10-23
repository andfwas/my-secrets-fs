
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secret: 'I can\'t find my ipad'},
        {id: 2, secret: 'I can\'t find my water bottle'},
        {id: 3, secret: 'I can\'t find my hoodie'}
      ]);
    });
};
