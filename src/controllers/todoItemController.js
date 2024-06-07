const express = require('express');

const router = express.Router();


router.get('todoList/:todoListId/todoItem/:id', (req, res) => {

    let todoListId = req.params.todoListId;
    let todoItemId = req.params.id;

    res.render('todoItemCreate');
});


router.post('/todoList/:todoListId/todoItem/create', (req, res) => {

    let todoListId = req.params.todoListId;


});


module.exports = router;