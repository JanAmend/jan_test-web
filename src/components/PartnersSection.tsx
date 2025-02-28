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

  const partners = [
    { name: "Bank11", id: 1, img: "src/img/Bank11.jpeg" },
    { name: "intec", id: 2, img: "src/img/intec.png" },
    { name: "partner", id: 3, img: "src/img/partner.png" },
    { name: "Schirmbeck", id: 4, img: "src/img/Schirmbeck.png" },
    { name: "Stahlgruber", id: 5, img: "src/img/Stahlgruber.png" },
  ];

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

        {/* Partner logos - Bilder werden hier eingebunden */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`aspect-[3/2] rounded-lg bg-secondary p-6 flex items-center justify-center hover-card reveal-animation delay-${index % 4 + 1}`}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        {/* Partnership benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Finanzierung",
              description: "Wir können Ihnen ein individuelles Finanzierungsangebot für Ihr Wunschfahrzeug erstellen."
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
