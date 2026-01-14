import { useEffect, useRef, useState } from "react";
import {
  Bath,
  Sun,
  Sofa,
  ChefHat,
  Wifi,
  Car,
  TreePine,
  Flame,
  Coffee,
  Bed,
} from "lucide-react";

const amenities = [
  { icon: Bath, name: "Jacuzzi exterior", description: "Relaxare sub cerul liber" },
  { icon: Sun, name: "Terasă spațioasă", description: "Cu mobilier confortabil" },
  { icon: Sofa, name: "Living open-space", description: "Cu ferestre panoramice" },
  { icon: ChefHat, name: "Bucătărie completă", description: "Complet utilată" },
  { icon: Bed, name: "Dormitoare confortabile", description: "Lenjerie premium" },
  { icon: Flame, name: "Grătar exterior", description: "Zonă de BBQ" },
  { icon: Coffee, name: "Espressor", description: "Cafea de specialitate" },
  { icon: Wifi, name: "Wi-Fi gratuit", description: "Internet de mare viteză" },
  { icon: Car, name: "Parcare privată", description: "Locuri de parcare gratuite" },
  { icon: TreePine, name: "Grădină privată", description: "Spațiu verde izolat" },
];

const AmenitiesSection = () => {
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
      id="facilitati"
      ref={sectionRef}
      className="section-padding bg-olive"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-cream/70 text-sm uppercase tracking-[0.2em] mb-4">
            Facilități
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight mb-6">
            Tot ce ai nevoie pentru <br />
            <span className="italic">relaxare perfectă</span>
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.name}
              className={`text-center group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/10 group-hover:bg-cream/20 transition-colors duration-300">
                <amenity.icon
                  className="w-7 h-7 text-cream"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-cream font-medium mb-1">{amenity.name}</h3>
              <p className="text-cream/60 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
