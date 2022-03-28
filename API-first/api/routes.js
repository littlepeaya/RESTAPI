'use strict';
module.exports = function(app) {
  let PeopleController = require('./controllers/PeopleController');

  // todoList Routes
  app.route('/people')
    .get(PeopleController.getAll)
    .post(PeopleController.add);

  app.route('/people/:id')
    .get(PeopleController.get)
    .put(PeopleController.update)
    .delete(PeopleController.delete);
};
