const express = require('express');

const router = express.Router();


router.get('/todoList/all', (req, res) => {

    res.render('todoListAll');
})

router.get('/todoList/:id', (req, res) => {

    let id = req.params.id;

    res.render('todoList');
});


router.get('/todoList', (req, res) => {
    //Display form for creating a todo list
})


router.post('/todoList', (req, res) => {
    //Handle POST requets for creating a todo list
});


module.exports = router;