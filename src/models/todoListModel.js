const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30
    },
    description : {
        type : String,
        required : true,
        minLength : 5,
        maxLength : 50
    },
    createdOn : Date
});


const TodoList = mongoose.model('todoList', todoListSchema);

module.exports = TodoList;