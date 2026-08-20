import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

function SourceCodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-amber-950/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:shadow-black/30">
      <Link href={`/projects/${project.slug}`} aria-label={`Read more about ${project.title}`} className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-9 items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-3 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 transition-colors hover:text-accent dark:text-zinc-50">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded bg-zinc-100 px-2 py-1 font-mono text-xs font-medium uppercase tracking-wide text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
              Live Deployment
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`} title="Source Code" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300">
            <SourceCodeIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
