
import { useEffect } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl: string;
}

const GoogleRatings = () => {
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

  // Mock data for 5-star reviews
  // In production, you would fetch this from Google's API and filter for 5-star reviews
  const fiveStarReviews: Review[] = [
    {
      id: 1,
      author: "Max Mustermann",
      rating: 5,
      text: "Hervorragender Service! Das Team war äußerst hilfsbereit und hat mir genau das Auto gefunden, das ich gesucht habe.",
      date: "15.04.2023",
      avatarUrl: "/placeholder.svg"
    },
    {
      id: 2,
      author: "Laura Schmidt",
      rating: 5,
      text: "Sehr zufrieden mit meinem Kauf. Die Beratung war kompetent und der Prozess unkompliziert.",
      date: "22.03.2023",
      avatarUrl: "/placeholder.svg"
    },
    {
      id: 3,
      author: "Thomas Meyer",
      rating: 5,
      text: "Ein wirklich vertrauenswürdiger Händler. Faire Preise und ausgezeichneter Kundenservice.",
      date: "05.05.2023",
      avatarUrl: "/placeholder.svg"
    },
    {
      id: 4,
      author: "Sarah Wagner",
      rating: 5,
      text: "Absolut empfehlenswert! Mein Auto läuft einwandfrei und der gesamte Kaufprozess war transparent und ehrlich.",
      date: "10.02.2023",
      avatarUrl: "/placeholder.svg"
    }
  ];

  return (
    <section id="bewertungen" className="section bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4 reveal-animation">
            Kundenfeedback
          </span>
          <h2 className="section-title reveal-animation delay-1">
            Was unsere Kunden über uns sagen
          </h2>
          <p className="section-subtitle reveal-animation delay-2">
            Werfen Sie einen Blick auf die 5-Sterne-Bewertungen unserer zufriedenen Kunden auf Google
          </p>
          
          <div className="flex items-center justify-center gap-1 mb-8 reveal-animation delay-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-lg font-medium">5.0</span>
            <span className="ml-1 text-sm text-muted-foreground">auf Google</span>
          </div>
          
          <a 
            href="https://business.google.com/your-business-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 reveal-animation delay-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Alle Bewertungen ansehen
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fiveStarReviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`bg-white p-6 rounded-xl shadow-sm hover-card reveal-animation delay-${index + 1}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={review.avatarUrl} 
                    alt={`${review.author} avatar`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.author}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{review.text}</p>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleRatings;
