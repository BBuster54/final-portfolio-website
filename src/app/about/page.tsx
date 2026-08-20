import SkillsBento from "@/components/SkillsBento";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        About Me
      </h1>
      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
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
      </div>

      <SkillsBento />
    </main>
  );
}
