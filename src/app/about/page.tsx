const skills = [
  {
    category: "Languages & Tools",
    items: ["Java", "JavaScript", "Python", "Google Workspace", "Microsoft Office"],
  },
  {
    category: "Currently Learning",
    items: ["React", "Next.js", "TypeScript", "SQL", "C"],
  },
  {
    category: "Core Strengths",
    items: ["Problem-Solving", "Time Management", "Team Collaboration", "Adaptability"],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        About Me
      </h1>

      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Download Resume
      </a>

      <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a Chemistry, Biochemistry, and Physics student at
          Fairleigh Dickinson University&apos;s Honors College. I&apos;m also
          minoring in Entrepreneurship and Leadership.
        </p>
        <p>
          My interest in software started in the lab. I kept running into
          problems that data visualization and automation could solve, so I
          started building tools to solve them. I built a Python app that
          tracks carbon footprints using Matplotlib. I&apos;m also working on
          Urban Insight, a dashboard that visualizes city data like air
          quality and traffic.
        </p>
        <p>
          Right now I&apos;m going through Harvard&apos;s CS50 to build a
          stronger programming foundation. I bring the same mindset from lab
          work into coding: test things, observe what happens, and improve
          from there.
        </p>
        <p>
          Outside of school and code, I play tennis, read, write, and
          volunteer with organizations like Jersey Cares and the YMCA/YWCA.
        </p>
      </div><section className="mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Skills
        </h2>
        <div className="mt-6 space-y-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}