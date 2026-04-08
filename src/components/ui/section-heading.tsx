import SectionHeadingTemplate from "./section-heading.template";
import "./section-heading.css";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return <SectionHeadingTemplate title={title} subtitle={subtitle} />;
}
