import React, { useState, useEffect, useRef, useMemo } from "react";
import BlurTextTemplate from "./blur-text.template";
import "./blur-text.css";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  const directionClass = direction === "top"
    ? "blur-text__segment--from-top"
    : "blur-text__segment--from-bottom";

  return (
    <BlurTextTemplate
      containerRef={ref}
      segments={segments}
      inView={inView}
      directionClass={directionClass}
      delay={delay}
      animateBy={animateBy}
      className={className}
      style={style}
    />
  );
};

export default BlurText;
