import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/cabin-exterior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="True Cabin - Cabană modernă în natură"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-cream/80 text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Escape to what's real
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Liniște, natură și <br />
          <span className="italic">timp pentru tine</span>
        </h1>
        <p
          className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          O cabană modernă, în mijlocul naturii, creată pentru relaxare autentică
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href="#contact"
            className="bg-cream text-charcoal px-10 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-warm-white hover:shadow-lg"
          >
            Rezervă acum
          </a>
          <a
            href="#despre"
            className="border border-cream/60 text-cream px-10 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:bg-cream/10"
          >
            Descoperă cabana
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#despre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/70 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
