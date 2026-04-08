import React from "react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./ui/section-heading";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillsTemplateProps {
  gridRef: React.RefObject<HTMLDivElement | null>;
  inView: boolean;
  skills: Skill[];
}

export default function SkillsTemplate({ gridRef, inView, skills }: SkillsTemplateProps) {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="SKILLS" subtitle="Technologies I work with" />

        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`skill-card group card-bg flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl border border-themed hover:border-[#C3E41D]/40 cursor-default ${
                  inView ? "skill-card--visible" : "skill-card--hidden"
                }`}
                style={{
                  transitionDuration: "0.5s, 0.5s, 0.3s, 0.3s",
                  transitionDelay: `${i * 60}ms, ${i * 60}ms, 0ms, 0ms`,
                }}
              >
                <Icon
                  className="w-6 h-6 md:w-7 md:h-7 text-neutral-400 group-hover:text-[#C3E41D] transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] sm:text-xs md:text-sm text-body group-hover:text-heading transition-colors duration-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
