const express = require('express');
const todoItemController = require('./controllers/todoItemController');
const todoListController = require('./controllers/todoListController');

const router = express.Router();

router.use(todoItemController);
router.use(todoListController);

module.exports = router;