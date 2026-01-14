import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/living-chairs.jpg";

const AboutSection = () => {
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
      id="despre"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src={aboutImage}
              alt="Interior True Cabin"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Despre noi
            </p>
            <h2 className="section-title">
              Un refugiu pentru <br />
              <span className="italic text-primary">suflet și minte</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                True Cabin nu este doar un loc de cazare. Este un spațiu în care 
                încetinești, respiri și te reconectezi cu natura și cu tine însuți.
              </p>
              <p>
                Am creat această cabană din dorința de a oferi o evadare autentică 
                din agitația orașului — un loc unde timpul curge altfel, unde 
                dimineața începe cu o cafea pe terasă și seara se încheie sub stele, 
                într-un jacuzzi cu vedere spre pădure.
              </p>
              <p>
                Fiecare detaliu a fost gândit cu grijă: lemnul natural, luminile 
                calde, textilele moi, spațiile vitrate care aduc natura înăuntru. 
                Nu turism de masă — ci o experiență intimă, pentru cei care știu 
                să prețuiască liniștea.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-4xl font-serif text-foreground">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Intimitate
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif text-foreground">∞</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Natură
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  Relaxare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
