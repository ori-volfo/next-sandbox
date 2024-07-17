import Link from 'next/link';
import {prisma} from '@/db';
import {redirect} from 'next/navigation';

async function createTodo(data: FormData) {
  "use server"

  const title = data.get('title');
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('invalid title');
  }

  await prisma.todo.create({data: {title, isCompleted: false}});
  redirect('/todo');
}

export default async function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1>New</h1>
        <Link
          className="border border-slate-33 text-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/todo" >Todo</Link>
      </header>

      <form action={createTodo}>
        <input type="text" name="title" className="border border-slate-33 bg-transparent
        rounded px-2 py-1 outline-none focus-within:border-slate-100" />
        <div className="flex gap-1 justify-end">
          <Link href="..."
          className="border border-slate-33 text-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >Cancel</Link>
          <button type="submit"
                  className="border border-slate-33 text-slate-300 px-2 py-1 rounded
            hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >Save</button>
        </div>
      </form>
    </>
  );
}