import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Despre", href: "#despre" },
    { name: "Experiență", href: "#experienta" },
    { name: "Galerie", href: "#galerie" },
    { name: "Facilități", href: "#facilitati" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <img
              src={logo}
              alt="True Cabin"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  isScrolled ? "text-foreground/80" : "text-cream/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-olive-dark"
                  : "bg-cream/90 text-charcoal hover:bg-cream"
              }`}
            >
              Rezervă
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-10 p-2 ${
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-cream"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-background transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 btn-olive"
            >
              Rezervă acum
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
