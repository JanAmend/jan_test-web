
import { useEffect } from "react";

const PartnersSection = () => {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="partners" className="section bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4 reveal-animation">
            Starke Partnerschaften
          </span>
          <h2 className="section-title reveal-animation delay-1">
            Unsere verlässlichen Partner
          </h2>
          <p className="section-subtitle reveal-animation delay-2">
            Um Ihnen stets den besten Service bieten zu können, kooperieren wir mit ausgewählten, renommierten Unternehmen der Automobilbranche.
          </p>
        </div>

        {/* Partner logos - Using placeholder gradient backgrounds */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`aspect-[3/2] rounded-lg bg-secondary p-6 flex items-center justify-center hover-card reveal-animation delay-${index % 4 + 1}`}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded flex items-center justify-center">
                <span className="text-primary/40 font-medium">Partner {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Qualitätssicherung",
              description: "Durch unsere Partnerschaften garantieren wir höchste Standards bei allen Dienstleistungen."
            },
            {
              title: "Expertise",
              description: "Profitieren Sie von unserem breiten Netzwerk an Fachexperten und Spezialisten."
            },
            {
              title: "Kundenvorteile",
              description: "Exklusive Konditionen und Sonderangebote durch unsere starken Partnerschaften."
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className={`bg-secondary p-6 rounded-xl reveal-animation delay-${index + 1}`}
            >
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
