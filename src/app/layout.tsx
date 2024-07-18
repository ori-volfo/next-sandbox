import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next Sandbox",
  description: "doing Next stuff",
};

const links = [
  {href: "/", label: "Home"},
  {href: "/todo", label: "Todo"},
  {href: "/new", label: "New"}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800
      text-slate-100 container mx-auto p-4`}>
      <header>
        <nav>
          <ul className="flex mb-4">
            {links.map(link =>
              <li key={link.href}>
                <Link href={link.href}
                  className="border border-slate-33 text-slate-300 px-2 py-1 rounded
                  hover:bg-slate-700 focus-within:bg-slate-700 outline-none mr-5">
                  {link.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {children}</body>
    </html>
  );
}
