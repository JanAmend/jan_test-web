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
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-start text-left">
          <div
            className={`transition-all duration-1000 delay-1 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="overflow-hidden">
              <h1 className="typewriter text-3xl md:text-4xl font-bold leading-tight mb-6">
                Ihr vertrauenswürdiger Partner<br /> im Gebrauchtwagenhandel
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
              Erstklassiger Service, transparente Abwicklung und vielfältige
              Dienstleistungen rund um Ihr Wunschfahrzeug!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center">
                Mehr erfahren
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#footer" className="btn-outline">
                Probefahrt vereinbaren
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-3 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video bg-gradient-to-tr from-secondary to-background p-1">
              <img
                src="src/img/Hintergrundbild.jpeg"
                alt="Luxury car showcase"
                className="w-full h-full object-cover rounded-lg"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              {/* "Mit Garantie" als gelber, schräg gestellter Ribbon */}
              <div className="ribbon">
                <span>Mit Garantie</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="block text-sm font-medium opacity-90">
                  Premium Fahrzeuge
                </span>
                <p className="text-lg font-bold">Qualität, die überzeugt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geschwungener Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <style>{`
        .typewriter {
          overflow: hidden;
          border-right: 2px solid rgba(0, 0, 0, 0.75);
          white-space: nowrap;
          animation: typing 3s steps(40, end) forwards, blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: rgba(0, 0, 0, 0.75);
          }
        }

        .ribbon {
          position: absolute;
          top: 20px;
          right: -32px;
          width: 150px;
          text-align: center;
          background-color: #f59e0b;
          color: white;
          font-weight: bold;
          padding: 5px 0;
          transform: rotate(45deg);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        .ribbon:before,
        .ribbon:after {
          content: "";
          position: absolute;
          bottom: -5px;
          border-top: 5px solid #f59e0b;
        }
        .ribbon:before {
          left: 0;
          border-left: 5px solid transparent;
        }
        .ribbon:after {
          right: 0;
          border-right: 5px solid transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
