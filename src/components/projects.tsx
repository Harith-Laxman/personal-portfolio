import { useEffect, useRef, useState } from "react";
import ProjectsTemplate, { ProjectCardTemplate } from "./projects.template";
import "./projects.css";

const projects = [
  {
    title: "Crop Disease Prediction",
    description:
      "A deep learning model using YOLOv3 and ResNet-152 that detects and identifies 28 different diseases across 14 plant species, helping prevent crop loss worldwide.",
    tags: ["Python", "YOLOv3", "ResNet-152", "Deep Learning"],
    image: "/assets/project-1.jpg",
    github: "https://github.com/Harith-Laxman",
  },
  {
    title: "Signature Forgery Detection",
    description:
      "A machine learning model using ResNet-50 that detects forgeries in handwritten signatures, automating verification in finance and banking domains.",
    tags: ["Python", "ResNet-50", "Computer Vision"],
    image: "/assets/project-2.jpeg",
    github: "https://github.com/Harith-Laxman",
  },
  {
    title: "Cursor Control via Facial Movements",
    description:
      "Uses PyAutoGUI and OpenCV to map facial movements to cursor control. Navigate with head movements, click with winks, and scroll with eye gestures.",
    tags: ["Python", "OpenCV", "PyAutoGUI"],
    image: "/assets/project-3.png",
    github: "https://github.com/Harith-Laxman",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <ProjectCardTemplate
      cardRef={ref}
      inView={inView}
      project={project}
      index={index}
    />
  );
}

export default function Projects() {
  return (
    <ProjectsTemplate
      projects={projects}
      renderCard={(project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      )}
    />
  );
}
