export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Feel free to reach out through any of the links below.
      </p>
      <div className="mt-8 flex flex-col gap-4 text-zinc-900 dark:text-zinc-50">
        <a
          href="mailto:b.best@student.fdu.edu"
          className="text-lg font-medium underline underline-offset-4"
        >
          b.best@student.fdu.edu
        </a>
        <a
          href="https://github.com/BBuster54"
          className="text-lg font-medium underline underline-offset-4"
        >
          GitHub →
        </a>
      </div>
    </main>
  );
}