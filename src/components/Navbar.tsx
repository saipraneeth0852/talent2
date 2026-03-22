import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import TalentAccelLogo from "./TalentAccelLogo";
import ThemeToggle from "./ThemeToggle";

const links = ["Services", "Industries", "Process", "Case Studies", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[900px] rounded-2xl px-6 py-3 transition-all duration-200
      dark:glass-nav glass-nav-light
      ${scrolled ? "dark:border-white/[0.12] border-black/[0.1]" : ""}
    `}>
      <div className="flex items-center justify-between">
        <TalentAccelLogo />
        
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:block text-sm font-semibold px-5 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Call
          </button>
          <button className="md:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-3">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="text-sm font-semibold px-5 py-2 rounded-xl bg-primary text-primary-foreground w-fit"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
