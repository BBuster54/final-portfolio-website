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