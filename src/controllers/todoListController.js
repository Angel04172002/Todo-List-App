const express = require('express');

const router = express.Router();


router.get('/todoList/all', (req, res) => {

    res.render('todoListAll');
})

router.get('/todoList/:id', (req, res) => {

    let id = req.params.id;

    res.render('todoList');
});


router.post('/todoList', (req, res) => {

});

module.exports = router;