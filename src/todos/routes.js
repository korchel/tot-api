const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/todos', controller.getTodos);
router.post("/todos", controller.addTodo);
router.get('/todos/:id', controller.getTodoById);
router.put('/todos/:id', controller.updateTodo);
router.delete('/todos/:id', controller.deleteTodo);

module.exports = router;