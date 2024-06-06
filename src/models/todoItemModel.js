const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    title : String,
    description : String,
    priority : Number,
    category : String,
    createdOn : Date
});


const TodoItemModel = mongoose.model('todoItem', todoItemSchema);

module.exports = TodoItemModel;

