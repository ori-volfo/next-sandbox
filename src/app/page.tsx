import Link from "next/link";

export default function Home() {
  return <>
    <header className="flex justify-between mb-4 items-center">
      <h1>Home</h1>
      <Link
        className="border border-slate-33 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/todo" >Todo</Link>

    </header>
    <main>
      <div>
        This is the main page of this sandbox app
      </div>
    </main>
  </>
}
