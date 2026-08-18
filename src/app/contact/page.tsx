export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Feel free to reach out through any of the links below.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        <a
          href="mailto:b.best@student.fdu.edu"
          className="font-mono text-lg font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
        >
          b.best@student.fdu.edu
        </a>
        <a
          href="https://github.com/BBuster54"
          className="font-mono text-lg font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
        >
          GitHub →
        </a>
      </div>
    </main>
  );
}