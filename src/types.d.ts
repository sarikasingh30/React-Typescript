type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type EditTodo = (todoToEdit: string,eid:number) => void;

type Todo = {
  id:number
  title: string;
  isCompleted: boolean;
}

type ToggleComplete = (selectedTodo: Todo) => void;

// type Option = {
//   value: string;
//   onClick: () => void;
//   color?: string;
// }
