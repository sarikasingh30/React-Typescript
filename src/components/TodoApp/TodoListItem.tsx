import React, { useState } from "react";
import "./todos.css";
import { AiFillDelete } from "react-icons/ai";
// import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.title);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onTodoUpdate = (e: any, x: number) => {
    // console.log(e)
    let text = e.target.value;
    setInputText(text);
  };

  return (
    <div className="liB">
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.isCompleted}
        />
        <div
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.title}
        </div>
      </label>
      <button
        style={{margin: "1%", padding: "1%" }}
        onClick={() => onDelete()}
      >
        <AiFillDelete/>
      </button>
    </div>
  );
};
