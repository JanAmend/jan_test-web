
import { useEffect } from "react";

const IntroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".reveal-animation");
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;
        
        if (elementTop < triggerPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-animation">
            Willkommen bei Ihrem Gebrauchtwagenexperten!
          </h2>
          <div className="reveal-animation delay-1">
            <p className="text-lg text-muted-foreground mb-4">
              Wir stehen für Kompetenz, Zuverlässigkeit und exzellenten Kundenservice im Autohandel. Entdecken Sie unser umfangreiches Angebot – von der Fahrzeugvermittlung über Inzahlungnahme bis hin zu Finanzierung und umfassenden Serviceleistungen.
            </p>
            <p className="text-lg text-muted-foreground">
              Als seriöser Händler bieten wir Ihnen nicht nur hochwertige Fahrzeuge, sondern auch ein Rundum-sorglos-Paket, das Ihren Autokauf zu einem angenehmen Erlebnis macht.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16">
          {[
            { figure: "1000+", label: "Zufriedene Kunden" },
            { figure: "15+", label: "Jahre Erfahrung" },
            { figure: "50+", label: "Geprüfte Fahrzeuge" },
            { figure: "100%", label: "Kundenorientiert" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-lg bg-secondary backdrop-blur-sm reveal-animation delay-${index + 1}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.figure}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
