import { useEffect, useRef, useState } from "react";
import { TreePine, Bath, Flame, Wine, Sparkles } from "lucide-react";
import jacuzziImage from "@/assets/jacuzzi-night.jpg";
import livingImage from "@/assets/living-open.jpg";
import terraceImage from "@/assets/jacuzzi-terrace.jpg";
import diningImage from "@/assets/dining-table.jpg";

const experiences = [
  {
    icon: TreePine,
    title: "Natură & Liniște",
    description: "Trezește-te cu sunetul păsărilor și petrece zile întregi înconjurat de verde.",
    image: livingImage,
  },
  {
    icon: Bath,
    title: "Jacuzzi Exterior",
    description: "Răsfață-te într-un jacuzzi cu apă caldă, sub cerul liber, zi sau noapte.",
    image: jacuzziImage,
  },
  {
    icon: Sparkles,
    title: "Atmosferă Cozy",
    description: "Lumini calde, textile moi și design minimalist pentru confort autentic.",
    image: terraceImage,
  },
  {
    icon: Wine,
    title: "Dining & Conexiune",
    description: "Bucătărie completă și spațiu de dining perfect pentru momente speciale.",
    image: diningImage,
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experienta"
      ref={sectionRef}
      className="section-padding bg-cream-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Experiența True Cabin
          </p>
          <h2 className="section-title max-w-3xl mx-auto">
            Mai mult decât cazare — <br />
            <span className="italic text-primary">o stare de spirit</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group relative overflow-hidden h-[400px] lg:h-[450px] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <exp.icon className="w-10 h-10 text-cream/80 mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl lg:text-3xl font-serif text-cream mb-3">
                  {exp.title}
                </h3>
                <p className="text-cream/80 text-base lg:text-lg leading-relaxed max-w-md">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/80 italic max-w-3xl mx-auto leading-relaxed">
            "Slow living nu înseamnă să faci mai puțin — înseamnă să fii mai prezent."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
