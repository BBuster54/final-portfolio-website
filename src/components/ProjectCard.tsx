import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900"
        aria-label={`Read more about ${project.title}`}
      >
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="p-6">
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
    </article>
  );
}
