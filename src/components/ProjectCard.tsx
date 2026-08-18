import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md dark:border-zinc-800">
      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-xl font-semibold text-zinc-900 transition-colors hover:text-accent dark:text-zinc-50">
          {project.title}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 font-mono text-xs uppercase tracking-wide">
        <a
          href={project.githubUrl}
          className="text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
        >
          GitHub →
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="text-zinc-900 underline underline-offset-4 transition-colors hover:text-accent dark:text-zinc-50"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}