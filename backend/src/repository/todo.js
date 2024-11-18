
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  //fetch all Todos
  getTodos: () => Promise.resolve(todoList),

  addTodo: (todo) => {
    todoList.todos.push(todo); // Add the todo to the array
    return Promise.resolve(todo); // Return the added todo
  }
};