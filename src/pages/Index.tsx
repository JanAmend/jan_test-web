
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import IntroSection from "@/components/IntroSection";
import Footer from "@/components/Footer";
import AudarisWidget from "@/components/AudarisWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <AudarisWidget />
        <ServicesSection />
        <PartnersSection />
        {/* Add other sections like Testimonials and About Us when they are created */}
        
        {/* Contact Section Placeholder - To be replaced with proper component */}
        <section id="kontakt" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-center mb-8">
                Haben Sie Fragen oder wünschen Sie weitere Informationen zu unseren Dienstleistungen? 
                Unser engagiertes Team steht Ihnen jederzeit zur Verfügung.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kontaktinformationen</h3>
                    <p className="mb-2"><strong>Adresse:</strong> Musterstraße 12, 12345 Musterstadt</p>
                    <p className="mb-2"><strong>Telefon:</strong> +49 000 123456</p>
                    <p className="mb-2"><strong>E-Mail:</strong> kontakt@gebr_autoexperte.de</p>
                    <p className="mb-4"><strong>Öffnungszeiten:</strong> Montag – Freitag: 09:00 – 18:00 Uhr</p>
                    <div className="flex space-x-4 mt-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                        Anrufen
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition-colors">
                        E-Mail senden
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kontaktformular</h3>
                    <form>
                      <div className="mb-4">
                        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
                      </div>
                      <div className="mb-4">
                        <input type="email" placeholder="E-Mail" className="w-full p-2 border border-gray-300 rounded" />
                      </div>
                      <div className="mb-4">
                        <textarea placeholder="Ihre Nachricht" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors w-full">
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
