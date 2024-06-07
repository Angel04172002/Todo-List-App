import { TodoList } from '../models/todoListModel';

const todoLists = [
    {
        _id: 1,
        name: 'Hobbies',
        description: 'Todo list about hobbies',
        createdOn: '6/5/2024'
    }
];

exports.getTodoListById = (id) => {

    const todoList = TodoList.find({id: id});

    if (todoList) {
        return todoList;
    }
};


exports.createTodoItem = (data) => {

    data._id = todoItems[todoItems.length - 1]._id + 1;
    todoItems.push(data);
};