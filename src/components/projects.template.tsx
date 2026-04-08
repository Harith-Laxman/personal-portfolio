import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";
import SectionHeading from "./ui/section-heading";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
}

interface ProjectCardTemplateProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  inView: boolean;
  project: Project;
  index: number;
}

export function ProjectCardTemplate({ cardRef, inView, project, index }: ProjectCardTemplateProps) {
  return (
    <div
      ref={cardRef}
      className={`project-card group card-bg rounded-xl border border-themed overflow-hidden hover:border-[#C3E41D]/30 ${
        inView ? "project-card--visible" : "project-card--hidden"
      }`}
      style={{
        transitionDuration: "0.6s, 0.6s, 0.3s, 0.3s",
        transitionDelay: `${index * 150}ms, ${index * 150}ms, 0ms, 0ms`,
      }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-heading group-hover:text-[#C3E41D] transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#C3E41D] transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-[#C3E41D] transition-colors" />
          </div>
        </div>

        <p className="project-card__description text-body text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-themed text-body group-hover:border-[#C3E41D]/30 group-hover:text-[#C3E41D]/80 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectsTemplateProps {
  projects: Project[];
  renderCard: (project: Project, index: number) => React.ReactNode;
}

export default function ProjectsTemplate({ projects, renderCard }: ProjectsTemplateProps) {
  return (
    <section id="projects" className="section-alt py-24 md:py-32 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="PROJECTS" subtitle="Some things I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => renderCard(project, i))}
        </div>
      </div>
    </section>
  );
}
