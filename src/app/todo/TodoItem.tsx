'use client'

import { TodoItemProps } from './Todo.types';


export function TodoItem({id, title, isCompleted, toggleTodo}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox"
         defaultChecked={isCompleted}
         className="cursor-pointer peer"
         onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through">{title}</label>
    </li>
  );
}