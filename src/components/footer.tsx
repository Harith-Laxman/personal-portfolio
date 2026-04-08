import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./ui/brand-icons";
import FooterTemplate from "./footer.template";
import "./footer.css";

const socials = [
  { icon: GithubIcon, href: "https://github.com/Harith-Laxman", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/harith-laxman-a-g/", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com/harith_laxman", label: "Twitter" },
  { icon: Mail, href: "mailto:ag.harithlaxman@gmail.com", label: "Email" },
];

export default function Footer() {
  return <FooterTemplate socials={socials} />;
}
