const express = require('express');

const todoItemController = require('./controllers/todoItemController');
const todoListController = require('./controllers/todoListController');
const homeController = require('./controllers/homeController.js');

const router = express.Router();

router.use(todoItemController);
router.use(todoListController);
router.use(homeController);


module.exports = router;