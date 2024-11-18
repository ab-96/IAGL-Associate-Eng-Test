

describe('TODO Service', () => {
  it('should be able to get todos from repository', async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done"
        }
      ]
    };
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });


  it('should be able to create a new todo', async () => {
    const newTodo = { task: "Learn Redux" };
    const todoRepository = {
      addTodo: async (todo) => Promise.resolve(todo)
    };

    const todoService = require('../../src/service/todo')(todoRepository);
    const actual = await todoService.createTodo(newTodo.task);

    // Validate that the returned todo matches the one we added
    expect(actual).toEqual(newTodo);
  });

  it('should throw an error if no task is provided when creating a todo', async () => {
    const todoRepository = {
      addTodo: async () => {} 
    };

    const todoService = require('../../src/service/todo')(todoRepository);

    await expect(todoService.createTodo()).rejects.toThrow("Task is required");
  });


});