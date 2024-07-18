import Link from 'next/link';
import {prisma} from '@/db';
import {TodoItem} from "@/app/todo/TodoItem";

async function getTodos() {
  return prisma.todo.findMany();
}
export default async function TodoPage() {
  const todos = await getTodos();

  const toggleHandler = async (id: string, isCompleted: boolean) => {
    'use server'

    await prisma.todo.update({where: {id}, data: {isCompleted}});
  }

  return (<>
    <h1 className="text-2xl">Todos</h1>

    <ul className="pl-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleHandler}/>
      ))}
    </ul>

  </>);

}
