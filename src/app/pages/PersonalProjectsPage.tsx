import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";
import rustToolkitImg from "../../imports/image.png";
import hugPupsImg from "../../imports/image-1.png";

const projects = [
  {
    id: 1,
    title: "Rust Toolkit",
    description: "An interactive encyclopedia for the survival game Rust. Features an items database with search and filtering, a recursive crafting tree, a raid cost calculator, loot tables, and a monument guide.",
    technologies: ["HTML", "CSS", "JavaScript", "AI-Assisted"],
    image: rustToolkitImg,
    link: "/web-development"
  },
  {
    id: 2,
    title: "HugPups – Therapy Dog Visitation Service",
    description: "An 8-page website for a fictional therapy dog rental service. Features a star rating picker, dynamic review injection, form validation, and an FAQ accordion built with vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: hugPupsImg,
    link: "/web-development"
  }
];

export function PersonalProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="mb-4">Personal Projects</h1>
        <p className="text-lg max-w-3xl">
          A collection of web development projects I've built during my studies. Each project demonstrates
          different skills from HTML/CSS fundamentals to JavaScript interactivity and database integration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-black/5">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3>{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#FAF8F3] border border-black/10 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed">{project.description}</p>
              <Link
                to={project.link}
                className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-md hover:bg-black/80 transition-colors text-sm font-medium"
              >
                View Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
