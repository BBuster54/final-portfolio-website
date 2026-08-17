import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800">
     <Link href={`/projects/${project.slug}`}>
  <h3 className="text-xl font-semibold text-zinc-900 hover:underline dark:text-zinc-50">
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
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.githubUrl}
        className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
      >
        GitHub →
      </a>
    </div>
  );
}