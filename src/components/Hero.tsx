
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-secondary to-background overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
              Ihr Gebrauchtwagen-Experte
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ihr vertrauenswürdiger Partner im Gebrauchtwagenhandel
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Erstklassiger Service, transparente Abwicklung und vielfältige Dienstleistungen rund um Ihr Wunschfahrzeug!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center">
                Mehr erfahren
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#contact" className="btn-outline">
                Probefahrt vereinbaren
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-3 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video bg-gradient-to-tr from-secondary to-background p-1">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Luxury car showcase"
                className="w-full h-full object-cover rounded-lg"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="block text-sm font-medium opacity-90">Premium Fahrzeuge</span>
                <p className="text-lg font-bold">Qualität, die überzeugt</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm p-3 rounded-lg shadow-md transform rotate-3 hidden md:block">
              <span className="text-sm font-medium">TÜV-geprüft</span>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-primary/10 backdrop-blur-sm p-3 rounded-lg shadow-md transform -rotate-6 hidden md:block">
              <span className="text-sm font-medium">Mit Garantie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
