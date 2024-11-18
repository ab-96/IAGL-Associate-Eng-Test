const todoService = (repository) => {
  return {
    // Existing method to get todos
    getTodos: async () => {
      return await repository.getTodos();
    },

    // New method to create a todo
    createTodo: async (task) => {
      if (!task) {
        throw new Error("Task is required");
      }
      // Create the new todo object
      const newTodo = { task };

      // Save it using the repository
      return await repository.addTodo(newTodo);
    }
  };
};

module.exports = todoService;