import { useEffect, useRef, useState } from "react";
import {
  Code,
  Leaf,
  Database,
  Radio,
  Globe,
  Layers,
  Container,
  GitBranch,
  Terminal,
  Server,
  Cloud,
  FileCode,
} from "lucide-react";
import SkillsTemplate from "./skills.template";
import "./skills.css";

const skills = [
  { name: "Java", icon: Code },
  { name: "Spring Boot", icon: Leaf },
  { name: "Hibernate", icon: Database },
  { name: "Kafka", icon: Radio },
  { name: "JavaScript", icon: FileCode },
  { name: "Angular", icon: Layers },
  { name: "React", icon: Globe },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "REST APIs", icon: Server },
  { name: "AWS", icon: Cloud },
];

export default function Skills() {
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

  return <SkillsTemplate gridRef={ref} inView={inView} skills={skills} />;
}
