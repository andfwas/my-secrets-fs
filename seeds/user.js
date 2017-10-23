
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Tom', email: 'tom@gmail.com', code: '172635'},
        {id: 2, username: 'Jerry', email: 'jerry@gmail.com', code: '675849'},
        {id: 3, username: 'Sam', email: 'sam@gmail.com', code: '354657'}
      ]);
    });
};
