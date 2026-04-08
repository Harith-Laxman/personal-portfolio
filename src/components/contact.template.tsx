import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/section-heading";

interface ContactTemplateProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  inView: boolean;
}

export default function ContactTemplate({ contentRef, inView }: ContactTemplateProps) {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading title="CONTACT" subtitle="Let's work together" />

        <div
          ref={contentRef}
          className={`contact__content space-y-8 ${
            inView ? "contact__content--visible" : "contact__content--hidden"
          }`}
        >
          <p className="contact__text text-body text-lg leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:ag.harithlaxman@gmail.com"
            className="contact__cta inline-flex items-center gap-3 px-8 py-4 rounded-full text-black font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(195,228,29,0.3)]"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <div className="pt-4">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-body hover:text-[#C3E41D] transition-colors duration-300 text-sm underline underline-offset-4"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
