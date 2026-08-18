import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-6">
      <Link
        href="/"
        className="text-lg font-semibold text-zinc-900 transition-colors hover:text-accent dark:text-zinc-50"
      >
        Brandon Best
      </Link>
      <div className="flex gap-6 font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        <Link href="/about" className="transition-colors hover:text-accent">
          About
        </Link>
        <Link href="/projects" className="transition-colors hover:text-accent">
          Projects
        </Link>
        <Link href="/contact" className="transition-colors hover:text-accent">
          Contact
        </Link>
      </div>
    </nav>
  );
}