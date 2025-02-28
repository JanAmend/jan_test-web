import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Startseite", href: "#home" },
  { name: "Unsere Leistungen", href: "#services" },
  { name: "Unsere Partner", href: "#partners" },
  { name: "Kundenstimmen", href: "#testimonials" },
  { name: "Über uns", href: "#about" },
  { name: "Kontakt", href: "#contact" },
  { name: "Impressum & Datenschutz", href: "https://mival.de/impressum/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
            MIVAL
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover-link transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="relative h-full w-full bg-background flex flex-col pt-20 px-6">
          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium border-b border-border pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
