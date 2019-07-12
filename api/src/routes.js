const express = require('express');

/* controllers */
const TodoController = require('./controllers/TodoController');

const routes = new express.Router();

/* rotas */
routes.post('/todo', TodoController.store);
routes.get('/todo', TodoController.index);
routes.delete('/todo/:id/', TodoController.remove);
routes.put('/todo/:id/', TodoController.toggle);
routes.put('/todo/:id/', TodoController.update);


module.exports = routes;
