import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import BlurText from "./blur-text";

interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
}

interface PortfolioHeroTemplateProps {
  isDark: boolean;
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement | null>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  menuItems: MenuItem[];
  toggleTheme: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export default function PortfolioHeroTemplate({
  isDark,
  isMenuOpen,
  menuRef,
  buttonRef,
  menuItems,
  toggleTheme,
  toggleMenu,
  closeMenu,
}: PortfolioHeroTemplateProps) {
  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" strokeWidth={2} />
              ) : (
                <Menu className="w-8 h-8" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[200px] md:w-[240px] shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100] menu-bg"
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300 ${
                      item.highlight
                        ? "text-accent"
                        : "text-heading hover:text-accent"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature */}
          <div className="hero-signature text-4xl text-heading">
            H
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity bg-neutral-200 dark:bg-neutral-800"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-neutral-800 dark:bg-white theme-toggle-thumb ${
                isDark ? "theme-toggle-thumb--dark" : "theme-toggle-thumb--light"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="hero" className="relative min-h-screen flex flex-col">
        {/* Centered Main Name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <BlurText
              text="HARITH"
              delay={100}
              animateBy="letters"
              direction="top"
              className="hero-name font-bold text-[72px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-[0.75] tracking-tighter uppercase whitespace-nowrap"
            />
            <BlurText
              text="LAXMAN"
              delay={100}
              animateBy="letters"
              direction="top"
              className="hero-name font-bold text-[72px] sm:text-[110px] md:text-[150px] lg:text-[190px] leading-[0.75] tracking-tighter uppercase whitespace-nowrap"
            />

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img
                  src="/assets/profile.jpg"
                  alt="Harith Laxman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
          <BlurText
            text="Building scalable systems, one line at a time."
            delay={150}
            animateBy="words"
            direction="top"
            className="hero-tagline text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center text-body hover:text-heading transition-colors duration-300"
          />
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 animate-bounce" />
        </a>
      </main>
    </div>
  );
}
