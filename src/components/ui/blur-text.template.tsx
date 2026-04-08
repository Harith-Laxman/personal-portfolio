import React from "react";

interface BlurTextTemplateProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  segments: string[];
  inView: boolean;
  directionClass: string;
  delay: number;
  animateBy: "words" | "letters";
  className: string;
  style?: React.CSSProperties;
}

export default function BlurTextTemplate({
  containerRef,
  segments,
  inView,
  directionClass,
  delay,
  animateBy,
  className,
  style,
}: BlurTextTemplateProps) {
  return (
    <div ref={containerRef} className={`blur-text ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          className={`blur-text__segment ${directionClass} ${
            inView ? "blur-text__segment--visible" : "blur-text__segment--hidden"
          }`}
          style={{ transitionDelay: `${i * delay}ms` }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </div>
  );
}
