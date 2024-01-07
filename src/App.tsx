import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Counter } from "./components/CounterApp/Counter";
import { TodoForm } from "./components/TodoApp/TodoForm";
import { TodoList } from "./components/TodoApp/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([
        ...todos,
        { id: todos.length, title: newTodo, isCompleted: false },
      ]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (el) => el.title != todoToRemove.title
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit, eid) => {
    let todoToUpdateIndex = todos.map((el) => {
      if (el.id == eid) {
        return { ...el, title: todoToEdit };
      }
      return el;
    });
    // console.log(todoToUpdateIndex)
    setTodos(todoToUpdateIndex)
  };

  return (
    <div className="App">
      <Counter />
      <h1 style={{textAlign:"center", margin:"auto"}}>Todo App</h1>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
