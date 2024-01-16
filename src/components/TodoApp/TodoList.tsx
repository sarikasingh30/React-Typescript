import React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  // editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveTodo}) => {
  return (
    <div style={{width:"100%"}}>
     {todos.map(todo => (
       <TodoListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
        />
     ))}
    </div>
  );
};