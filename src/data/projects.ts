export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "finance-dashboard",
    title: "Finance Dashboard",
    description:
      "A responsive personal-finance dashboard that combines account tracking with live equity and crypto market data. Provider requests are validated, cached, rate-aware, and designed to fail gracefully.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    githubUrl:
      "https://github.com/BBuster54/Brandon-Projects-/tree/main/projects/finance-dashboard",
    liveUrl: "https://brandon-projects.vercel.app/",
  },
  {
    slug: "urban-insight",
    title: "Urban Atlas",
    description:
      "A map-first city data explorer with a segmented EPA AQI gauge, local-time air-quality trends, and official Census housing and commuting estimates. Compare five US cities, inspect sources and freshness, and share or export an accessible view.",
    techStack: ["JavaScript", "Leaflet", "Census ACS", "Open-Meteo"],
    githubUrl: "https://github.com/BBuster54/Brandon-Projects-/tree/main/urban-insight-platform",
    liveUrl: "/demos/urban-insight/index.html",
    imageUrl: "/images/urban-insight.png",
  },
  {
    slug: "carbon-footprint-tracker",
    title: "Carbon Footprint Tracker",
    description:
      "A live six-category carbon footprint calculator and Python CLI sharing a versioned emissions model. Explore scenarios, goals, local history, uncertainty ranges, and downloadable reports.",
    techStack: ["JavaScript", "Python", "HTML", "CSS"],
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
];