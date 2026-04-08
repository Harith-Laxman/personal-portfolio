import BlurText from "./blur-text";

interface SectionHeadingTemplateProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeadingTemplate({ title, subtitle }: SectionHeadingTemplateProps) {
  return (
    <div className="mb-16 text-center">
      <BlurText
        text={title}
        delay={80}
        animateBy="letters"
        direction="top"
        className="section-heading__title font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase"
      />
      {subtitle && (
        <BlurText
          text={subtitle}
          delay={100}
          animateBy="words"
          direction="bottom"
          className="section-heading__subtitle mt-4 text-base md:text-lg text-body"
        />
      )}
    </div>
  );
}
