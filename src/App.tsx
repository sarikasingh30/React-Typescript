import React, { useState } from "react";

import "./App.css";
import { Counter } from "./components/CounterApp/Counter";
import { TodoForm } from "./components/TodoApp/TodoForm";
import { TodoList } from "./components/TodoApp/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos:Array<Todo>  = todos.map((todo) => {
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
      (el) => el.id != todoToRemove.id
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
     <Counter />
      <div className="todog">
        <h1 style={{textAlign:"center", margin:"auto"}}>Todo App</h1>
         <TodoForm addTodo={addTodo} />
         <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo}/>
      </div>

    </div>
  );
}

export default App;
