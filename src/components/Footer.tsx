import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start mb-12">
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="True Cabin" className="h-16 w-auto mb-4 brightness-[10]" />
            <p className="text-cream/60 text-sm leading-relaxed">
              Un refugiu pentru relaxare autentică, <br />
              în mijlocul naturii.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Navigare
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#despre" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Despre
              </a>
              <a href="#experienta" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Experiență
              </a>
              <a href="#galerie" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Galerie
              </a>
              <a href="#facilitati" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Facilități
              </a>
              <a href="#contact" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-cream font-medium mb-4 text-sm uppercase tracking-wider">
              Social Media
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-cream" />
              </a>
            </div>
            <p className="text-cream/60 text-sm">hello@truecabin.ro</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © 2025 True Cabin. Toate drepturile rezervate.
          </p>
          <p className="text-cream/60 text-sm italic font-serif">
            "Escape to what's real"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
