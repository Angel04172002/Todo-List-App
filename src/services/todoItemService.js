const todoItems = [
    {
        _id: 1,
        title: 'Go shopping',
        description: 'Buy milk and butter',
        createdOn: '6/5/2024'
    }
];


exports.getTodoItemById = (id) => {

    const todoItem = todoItems.find(item => item._id == id);

    if(todoItem != null) {
        return todoItem;
    }
};


exports.createTodoItem = (data) => {

    data._id = todoItems[todoItems.length - 1]._id + 1;
    todoItems.push(data);
};