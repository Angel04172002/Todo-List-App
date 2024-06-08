const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100
    },
    priority: {
        type: Number,
        required: false,
        min: 1,
        max: 5
    },
    category: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    createdOn: Date
});


const TodoItem = mongoose.model('todoItem', todoItemSchema);

module.exports = TodoItem;

