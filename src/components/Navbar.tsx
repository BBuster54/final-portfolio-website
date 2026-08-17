import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
      <Link href="/" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Brandon Best
      </Link>
      <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-50">
          About
        </Link>
        <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-50">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-50">
          Contact
        </Link>
      </div>
    </nav>
  );
}