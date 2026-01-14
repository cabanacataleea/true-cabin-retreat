import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Un loc unde chiar simți că timpul încetinește. Am plecat reîncărcați și cu o dorință imensă de a reveni.",
    author: "Maria & Andrei",
    location: "București",
  },
  {
    text: "Jacuzzi-ul sub stele, liniștea totală și designul impecabil — experiența perfectă pentru o evadare romantică.",
    author: "Elena",
    location: "Cluj-Napoca",
  },
  {
    text: "Fiecare detaliu este gândit cu gust. Ne-am simțit ca acasă, doar că mult mai bine. Recomandăm din suflet!",
    author: "Familia Ionescu",
    location: "Timișoara",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
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
            Testimoniale
          </p>
          <h2 className="section-title">
            Ce spun <span className="italic text-primary">oaspeții noștri</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background p-8 lg:p-10 relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-primary/10"
                strokeWidth={1}
              />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
