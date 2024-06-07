const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    name : String,
    description : String,
    createdOn : Date
});

const TodoList = mongoose.model('todoList', todoListSchema);

module.exports = TodoList;