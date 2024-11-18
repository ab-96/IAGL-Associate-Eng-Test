import React from "react";
import TodoList from "./component/TodoList";
import AddTodoForm from  "./component/AddTodoForm";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}