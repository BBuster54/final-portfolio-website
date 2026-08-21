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
    slug: "urban-insight",
    title: "Urban Insight",
    description:
      "A city analytics platform with real-time data visualizations for urban metrics like air quality, traffic, and waste. Features interactive dashboards with dynamic charts, map-based overlays, and filtering tools for data accessibility.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/BBuster54/Brandon-Projects-/tree/main/urban-insight-platform",
    imageUrl: "/images/urban-insight.png",
  },
  {
    slug: "carbon-footprint-tracker",
    title: "Carbon Footprint Tracker",
    description:
      "A Python application that calculates and visualizes individual carbon footprints based on user input. Uses Matplotlib for data visualization, with CSV import/export functionality for tracking data over time.",
    techStack: ["Python", "Matplotlib"],
    githubUrl: "https://github.com/BBuster54/Brandon-Projects-/tree/main/carbon-footprint-tracker",
    imageUrl: "/images/carbon-footprint-tracker.png",
       liveUrl: "/demos/carbon-footprint-tracker/index.html",
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A professional software engineering portfolio built to showcase projects and give recruiters an easy way to learn about my work. Focused on clean, fast, modern design.",
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/BBuster54/final-portfolio-website.git",
    liveUrl: "https://final-portfolio-website.vercel.app/",
    imageUrl: "/images/portfolio-website.png",
  },

  {
  slug: "urban-insight",
  title: "Urban Insight",
  description: "...", // unchanged
  techStack: ["HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/BBuster54/Brandon-Projects-/tree/main/urban-insight-platform",
  liveUrl: "/demos/urban-insight/index.html",
  imageUrl: "/images/urban-insight.png",
},
];