import React, { useState } from "react";
// import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.title);

  const onDelete = () => {
    onRemoveTodo(todo);
  }

  const onEdit = () => {
    setIsEditOn(true);
  }

  const onTodoUpdate = (e: any,x:number) => {
    // console.log(e)
    let text = e.target.value;
    setInputText(text);
    editTodo(text,x);
    
  }

  return (
    <li className={todo.isCompleted? "todo-row completed" : "todo-row"}>
      <label>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.isCompleted}
        />
        {isEditOn ? <input className="edit-input" type="text"style={{ textDecoration: todo.isCompleted? 'line-through' : 'none' }} value={inputText} onChange={(e) => onTodoUpdate(e,todo.id)}/> : <span style={{ textDecoration: todo.isCompleted? 'line-through' : 'none' }} >{todo.title}</span>}
      </label>
      <button style={{border:"4px solid blue",margin:"1%", padding:"1%"}} onClick={()=>onEdit()}>Edit</button>
      <button style={{border:"4px solid blue",margin:"1%", padding:"1%"}} onClick={()=>onDelete()}>Delete</button>
    </li>
  )
}