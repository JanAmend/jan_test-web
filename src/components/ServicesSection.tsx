import { Car, CreditCard, Truck, Wrench, ArrowRight, RefreshCw, Diamond } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: <Car className="h-8 w-8" />,
    title: "Gebrauchtwagenverkauf",
    description: "Finden Sie aus einem sorgfältig geprüften Bestand Ihr Traumauto – mit TÜV, Garantie und einem lückenlosen Servicepaket."
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Inzahlungnahme",
    description: "Profitieren Sie von einer fairen und transparenten Bewertung Ihres aktuellen Fahrzeugs, die den Einstieg in Ihr neues Auto erleichtert."
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Finanzierung & Leasing",
    description: "Erhalten Sie individuelle Finanzierungs- oder Leasingangebote, die exakt auf Ihre Bedürfnisse zugeschnitten sind – ohne versteckte Kosten."
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Service & Wartung",
    description: "Vertrauen Sie auf unseren umfassenden Wartungs- und Reparaturservice. Unser qualifiziertes Fachpersonal sorgt für eine kontinuierliche Betreuung Ihres Fahrzeugs."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Logistik & Lieferung",
    description: "Wir kümmern uns um einen reibungslosen Fahrzeugtransfer – sei es direkt zu Ihnen nach Hause oder an einen vereinbarten Übergabeort."
  },
  {
    icon: <Diamond className="h-8 w-8" />,
    title: "Zusätzliche Dienstleistungen",
    description: "Neben dem klassischen Autokauf bieten wir Beratungen zu Fahrzeughistorien, Garantieleistungen, Instandhaltungsprogrammen und vielem mehr – alles aus einer Hand."
  }
];

const ServicesSection = () => {
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
    handleScroll(); // Überprüfe den Sichtbarkeitsstatus bereits beim Laden
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="section bg-secondary">
      <div className="container-custom">
        {/* Abschnitts-Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4 reveal-animation">
            Umfassender Service
          </span>
          <h2 className="section-title reveal-animation delay-1">
            Unser Dienstleistungsangebot
          </h2>
          <p className="section-subtitle reveal-animation delay-2">
            Unser Gebrauchtwagenhändler bietet Ihnen ein breites Spektrum an Services, die den gesamten Kauf- und Serviceprozess abdecken:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-background rounded-xl p-6 shadow-sm hover-card reveal-animation delay-${index % 3 + 1}`}
            >
              <div className="bg-primary/5 p-3 rounded-lg inline-flex mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
              >
                Mehr erfahren <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bilderbereich mit gleicher Höhe */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-animation">
          <img 
            src="src/img/Schlüsselübergabe.jpeg" 
            alt="Schlüsselübergabe" 
            className="rounded-xl shadow-lg object-cover h-64 w-full"
          />
          <img 
            src="src/img/Transport.jpeg" 
            alt="Transport" 
            className="rounded-xl shadow-lg object-cover h-64 w-full"
          />
        </div>

        {/* Unsere Vorteile */}
        <div className="mt-20 bg-primary/5 rounded-xl p-8 lg:p-12 reveal-animation">
          <h3 className="text-2xl font-bold mb-6 text-center">Unsere Vorteile</h3>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Mehrjährige Branchenerfahrung",
              "Transparente Prozesse",
              "Umfassender Service",
              "Starkes Partnernetzwerk"
            ].map((advantage, index) => (
              <li 
                key={index} 
                className={`flex items-center reveal-animation delay-${index + 1}`}
              >
                <div className="mr-3 text-primary">
                  <ArrowRight size={16} />
                </div>
                <span className="font-medium">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
