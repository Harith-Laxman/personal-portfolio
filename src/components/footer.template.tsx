import type { LucideIcon } from "lucide-react";

interface Social {
  icon: LucideIcon | ((props: { className?: string }) => JSX.Element);
  href: string;
  label: string;
}

interface FooterTemplateProps {
  socials: Social[];
}

export default function FooterTemplate({ socials }: FooterTemplateProps) {
  return (
    <footer className="section-alt py-12 px-6 border-t border-themed transition-colors duration-300 flex flex-col items-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-neutral-400 hover:text-[#C3E41D] transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <p className="footer__credit text-muted text-sm">
          Designed & Built by Harith Laxman
        </p>
      </div>
    </footer>
  );
}
