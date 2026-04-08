import React from "react";
import { FileText } from "lucide-react";
import SectionHeading from "./ui/section-heading";

interface AboutTemplateProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  inView: boolean;
}

export default function AboutTemplate({ contentRef, inView }: AboutTemplateProps) {
  return (
    <section id="about" className="section-alt py-24 md:py-32 px-6 transition-colors duration-300 flex flex-col items-center overflow-hidden">
      <div className="max-w-xl w-full p-5 rounded-xl">
        <SectionHeading title="ABOUT" subtitle="A bit about me and what I do" />

        <div
          ref={contentRef}
          className={`about__content flex flex-col items-center ${
            inView ? "about__content--visible" : "about__content--hidden"
          }`}
        >
          {/* Bio + Resume Button */}
          <div className="space-y-5 max-w-2xl">
            <div className="about__bio space-y-4 text-body text-base md:text-lg leading-relaxed ">
              <p>
                Hey! I'm <span className="text-heading font-medium">Harith Laxman</span>, a backend developer who enjoys building things that quietly power the apps people use every day. I mainly work with <span className="text-[#C3E41D] font-medium">Java, Spring Boot, and Kafka</span>, designing systems that are scalable, reliable, and easy to maintain.
              </p>
              <p>
                I like digging into how things work under the hood — whether it's optimizing performance, designing APIs, or figuring out how to make systems talk to each other smoothly.
              </p>
              <p>
                I'm naturally curious and tend to pick things up quickly, which has taken me from experimenting with deep learning and computer vision to building enterprise-grade systems in the fintech space.
              </p>
              <p>
                Outside of coding, I'm usually gaming or streaming, performing in theatre productions, or catching live shows around the city.
              </p>
            </div>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C3E41D]/40 text-[#C3E41D] font-medium text-sm hover:bg-[#C3E41D]/10 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
