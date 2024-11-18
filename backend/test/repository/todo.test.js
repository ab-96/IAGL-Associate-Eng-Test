
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it('should add a new todo', async () => {
    const newTodo = { task: "Drink Water" };
    const addedTodo = await repository.addTodo(newTodo); // Add a new todo

    // Check that the returned value matches the added todo
    expect(addedTodo).toEqual(newTodo);

    // Check that the todo list now contains the new todo
    const updatedList = await repository.getTodos();
    expect(updatedList.todos).toContainEqual(newTodo);
  });

});