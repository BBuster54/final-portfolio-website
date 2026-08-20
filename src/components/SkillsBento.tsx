const coreTechnologies = [
  { name: "Java", className: "border-orange-300 bg-orange-100 text-orange-950 dark:border-orange-500/40 dark:bg-orange-500/15 dark:text-orange-200" },
  { name: "JavaScript", className: "border-yellow-300 bg-yellow-100 text-yellow-950 dark:border-yellow-400/40 dark:bg-yellow-400/15 dark:text-yellow-100" },
  { name: "Python", className: "border-amber-300 bg-amber-100 text-amber-950 shadow-[0_0_20px_rgba(184,134,60,0.28)] dark:border-amber-300/50 dark:bg-amber-300/15 dark:text-amber-100 dark:shadow-[0_0_24px_rgba(209,161,92,0.2)]" },
  { name: "C", className: "border-blue-300 bg-blue-100 text-blue-950 dark:border-blue-400/40 dark:bg-blue-400/15 dark:text-blue-100" },
];

const activeDevelopment = ["React", "Next.js", "TypeScript", "SQL"];
const strengths = ["Problem-Solving", "Time Management", "Adaptability"];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-accent">
      <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  );
}

export default function SkillsBento() {
  return (
    <section className="mt-12" aria-labelledby="skills-heading">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">Technical toolkit</p>
          <h2 id="skills-heading" className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Skills</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 md:grid-rows-2">
        <article className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-amber-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-accent dark:hover:shadow-black/30 md:row-span-2">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">01 / Foundation</p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Core Technologies</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">The languages I use to turn scientific questions into practical software.</p>
          <ul className="mt-8 grid grid-cols-2 gap-3" aria-label="Core technologies">
            {coreTechnologies.map((skill) => (
              <li key={skill.name} className={`rounded-lg border px-3 py-3 font-mono text-sm font-semibold ${skill.className}`}>
                {skill.name}
              </li>
            ))}
          </ul>
        </article>

        <article className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-amber-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-accent dark:hover:shadow-black/30">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">02 / Building now</p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Active Development</h3>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies currently learning">
            {activeDevelopment.map((skill) => (
              <li key={skill} className="rounded-full border border-zinc-300 px-3 py-1.5 font-mono text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                {skill}
              </li>
            ))}
          </ul>
        </article>

        <article className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-amber-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-accent dark:hover:shadow-black/30">
          <p className="font-mono text-xs uppercase tracking-wide text-accent">03 / How I work</p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">Core Strengths</h3>
          <ul className="mt-5 space-y-3" aria-label="Core strengths">
            {strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"><CheckIcon />{strength}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
