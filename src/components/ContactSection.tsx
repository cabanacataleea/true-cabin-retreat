import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import eveningImage from "@/assets/cabin-evening.jpg";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Cerere trimisă cu succes!",
        description: "Vă vom contacta în cel mai scurt timp pentru confirmare.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        dates: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={eveningImage}
          alt="True Cabin seara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-cream/70 text-sm uppercase tracking-[0.2em] mb-4">
                Rezervare
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight mb-6">
                Rezervă-ți <br />
                <span className="italic">experiența</span>
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-12 max-w-lg">
                Completează formularul și îți vom confirma disponibilitatea în 
                cel mai scurt timp. Pentru urgențe, ne poți suna direct.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <p className="text-cream font-medium">Locație</p>
                    <p className="text-cream/60">România, la poalele munților</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <p className="text-cream font-medium">Telefon</p>
                    <p className="text-cream/60">+40 7XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <p className="text-cream font-medium">Email</p>
                    <p className="text-cream/60">hello@truecabin.ro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className={`bg-background/95 backdrop-blur-sm p-8 lg:p-12 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-serif text-foreground mb-8">
                Verifică disponibilitatea
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nume complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="dates"
                    placeholder="Perioada dorită (ex: 15-18 Ianuarie 2026)"
                    value={formData.dates}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Mesaj (opțional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-olive flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Se trimite..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Verifică disponibilitatea
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
