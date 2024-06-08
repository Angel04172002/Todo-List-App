const express = require('express');

const router = express.Router();


router.get('/todoList/all', (req, res) => {

    res.render('todoList/all');
})


router.get('/todoList/create', (req, res) => {

    res.render('todoList/create');
})


router.get('/todoList/:id', (req, res) => {

    let id = req.params.id;

    res.render('todoList');
});


router.post('/todoList', (req, res) => {
    //Handle POST requets for creating a todo list
});


module.exports = router;