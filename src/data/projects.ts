export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A professional software engineering portfolio built to showcase projects and give recruiters an easy way to learn about my work. Focused on clean, fast, modern design.",
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/BBuster54/portfolio-website.git",
    liveUrl: "https://your-portfolio-domain.vercel.app",
    imageUrl: "/images/portfolio-website.png",
  },
];