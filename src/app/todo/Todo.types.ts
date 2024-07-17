export type TodoItemProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  toggleTodo: (id: string, isCompleted: boolean) => void;
};