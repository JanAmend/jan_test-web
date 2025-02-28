import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import IntroSection from "@/components/IntroSection";
import Footer from "@/components/Footer";
import AudarisWidget from "@/components/AudarisWidget";
import GoogleRatings from "@/components/GoogleRatings";

const Index = () => {
  // Hier kannst du deine WhatsApp-Nummer eintragen (ohne Sonderzeichen und Leerzeichen)
  const whatsappNumber = "49000123456";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <ServicesSection />
        <GoogleRatings />
        <PartnersSection />
        <AudarisWidget />
        {/* Weitere Sektionen wie Testimonials und About Us können hier ergänzt werden */}
        
        {/* Kontakt Section */}
        <section id="kontakt" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center mb-8">
                Haben Sie Fragen oder wünschen Sie weitere Informationen zu unseren Dienstleistungen? 
                Unser engagiertes Team steht Ihnen jederzeit zur Verfügung.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Kontaktinformationen */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Unsere Kontaktdaten</h3>
                    <p className="mb-2"><strong>Adresse:</strong>  Wappersdorfer Str. 59, 92360 Mühlhausen</p>
                    <p className="mb-2"><strong>Telefon:</strong> +49 176 23509453</p>
                    <p className="mb-2"><strong>E-Mail:</strong> kontakt@mival.de</p>
                    <p className="mb-4"><strong>Öffnungszeiten:</strong> Mo – Fr: 09:00 – 18:00 Uhr</p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                        Anrufen
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition-colors">
                        E-Mail senden
                      </button>
                      <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors flex items-center"
                      >
                        {/* WhatsApp Icon (Inline SVG) */}
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.56 4.11 1.62 5.9L2 22l4.2-1.64c1.74.96 3.73 1.54 5.84 1.54 5.56 0 10.04-4.48 10.04-10.04C22.08 6.48 17.6 2 12.04 2zm5.58 14.05c-.24.67-1.4 1.3-1.93 1.39-.5.08-1.12.11-1.75-.13-1.42-.42-2.62-1.29-3.45-2.54-.27-.37-.38-.64-.53-1.03-.15-.39-.08-.73.07-1 .15-.28.34-.6.51-.87.17-.27.22-.43.33-.73.11-.3.06-.56-.03-.77-.09-.22-.81-1.97-1.11-2.68-.29-.7-.58-.6-.81-.61h-.7c-.23 0-.61.09-.93.43-.31.33-1.19 1.16-1.19 2.83 0 1.67 1.22 3.28 1.39 3.52.17.24 2.42 3.7 5.86 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 1.4-.57 1.6-1.12.2-.55.2-.99.14-1.12z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                  {/* Kontaktformular */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Schreiben Sie uns</h3>
                    <form>
                      <div className="mb-4">
                        <input 
                          type="text" 
                          placeholder="Name" 
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                        />
                      </div>
                      <div className="mb-4">
                        <input 
                          type="email" 
                          placeholder="E-Mail" 
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                        />
                      </div>
                      <div className="mb-4">
                        <textarea 
                          placeholder="Ihre Nachricht" 
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full"
                      >
                        Nachricht senden
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
