import Link from "next/link";
import Typewriter from "@/components/Typewriter";


export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col items-start justify-center px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">
        Hi, I&apos;m
      </p>
      <h1 className="mt-2 text-5xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-6xl">
        Brandon Best
      </h1>
      <p className="mt-4 min-h-[3.5rem] text-lg text-zinc-600 dark:text-zinc-400">
  <Typewriter text="Chemistry & Biochemistry student who builds software to make sense of data. I turn research problems into working tools." />
</p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-50"
        >
          Get In Touch
        </Link>
      </div>
    </main>
  );
}