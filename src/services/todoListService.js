const TodoList = require('../models/todoListModel');


exports.getAll = () => TodoList.find();

exports.getById = (id) => TodoList.findById(id);

exports.create = (data) => TodoList.create(data);