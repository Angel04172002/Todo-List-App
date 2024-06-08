const TodoItem = require('../models/todoItemModel');

exports.getTodoItemById = (id) => TodoItem.findById(id);

exports.createTodoItem = (data) => TodoItem.create(data);