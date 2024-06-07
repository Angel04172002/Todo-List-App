const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    title : String,
    description : String,
    priority : Number,
    category : String,
    createdOn : Date
});


const TodoItem = mongoose.model('todoItem', todoItemSchema);

module.exports = TodoItem;

