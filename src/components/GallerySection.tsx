import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import exteriorDay from "@/assets/cabin-exterior-day.jpg";
import exterior from "@/assets/cabin-exterior.jpg";
import evening from "@/assets/cabin-evening.jpg";
import jacuzziNight from "@/assets/jacuzzi-night.jpg";
import jacuzziTerrace from "@/assets/jacuzzi-terrace.jpg";
import livingOpen from "@/assets/living-open.jpg";
import livingDining from "@/assets/living-dining.jpg";
import livingChairs from "@/assets/living-chairs.jpg";
import diningTable from "@/assets/dining-table.jpg";

const galleryImages = [
  { src: exterior, alt: "Exterior cabană - vedere frontală" },
  { src: exteriorDay, alt: "Exterior cabană - zi însorită" },
  { src: evening, alt: "Cabana la apus" },
  { src: jacuzziNight, alt: "Jacuzzi exterior noapte" },
  { src: jacuzziTerrace, alt: "Terasă cu jacuzzi" },
  { src: livingOpen, alt: "Living open space" },
  { src: livingDining, alt: "Living și dining" },
  { src: livingChairs, alt: "Zonă relaxare" },
  { src: diningTable, alt: "Masă dining" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev !== null
            ? (prev - 1 + galleryImages.length) % galleryImages.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="galerie"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Galerie
          </p>
          <h2 className="section-title">
            Descoperă <span className="italic text-primary">True Cabin</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              } ${index === 4 ? "col-span-2 md:col-span-1" : ""} transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  index === 0 ? "h-[400px] md:h-[600px]" : "h-[200px] md:h-[290px]"
                }`}
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-all duration-300 group-hover:bg-charcoal/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            className="absolute left-6 text-cream/80 hover:text-cream transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((selectedImage + 1) % galleryImages.length);
            }}
            className="absolute right-6 text-cream/80 hover:text-cream transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 text-cream/60 text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
