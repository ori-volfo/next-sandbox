import Link from 'next/link';
import {prisma} from '@/db';
import {TodoItem} from "@/app/todo/TodoItem";


export default async function Page() {
  const todos = await prisma.todo.findMany();

  const toggleHandler = async (id: string, isCompleted: boolean) => {
    'use server'

    await prisma.todo.update({where: {id}, data: {isCompleted}});
  }

  return (<>
    <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="border border-slate-33 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/">Home</Link>
      <Link
        className="border border-slate-33 text-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new" >New</Link>
    </header>

    <ul className="pl-4">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleHandler}/>
      ))}
    </ul>

  </>);

}
