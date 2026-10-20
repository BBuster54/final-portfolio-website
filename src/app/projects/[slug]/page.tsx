import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.slug === "urban-insight" && (
        <section className="mt-10 space-y-4 text-zinc-700 dark:text-zinc-300" aria-label="How Urban Insight works">
          <h2 className="text-xl font-bold">How it works</h2>
          <p>Explore five cities through a cooperative-touch map or its keyboard-accessible city directory. Compare the same metric across cities, share a filtered view, or export values with their sources and reference dates.</p>
          <h2 className="text-xl font-bold">Data sources and limitations</h2>
          <p>Air quality uses the coarse CAMS global model via Open-Meteo, not local monitor observations. Failed requests fall back to a labeled last-good cache, then neutral sample markers. Official housing and commute figures are Census ACS five-year survey estimates; owner-reported home values are not sale prices.</p>
        </section>
      )}
      <div className="mt-6 flex gap-4 font-mono text-xs uppercase tracking-wide">
        <a
          href={project.githubUrl}
          className="text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
        >
          View on GitHub →
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
          >
            View Live Demo →
          </a>
        )}
      </div>
    </main>
  );
}
