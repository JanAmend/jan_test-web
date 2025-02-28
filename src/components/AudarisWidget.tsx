
import React from "react";

interface AudarisWidgetProps {
  widgetUrl?: string;
}

const AudarisWidget = ({ widgetUrl }: AudarisWidgetProps) => {
  return (
    <section id="fahrzeuge" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-animation">
          <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
            Unser Angebot
          </span>
          <h2 className="section-title reveal-animation delay-1">
            Entdecken Sie unsere Fahrzeuge
          </h2>
          <p className="section-subtitle reveal-animation delay-2">
            Hier finden Sie unser aktuelles Angebot an sorgfältig ausgewählten Gebrauchtwagen – mit TÜV, Garantie und einem lückenlosen Servicepaket.
          </p>
        </div>

        <div className="bg-secondary rounded-xl p-4 shadow-sm overflow-hidden reveal-animation">
          {widgetUrl ? (
            <div className="aspect-video w-full">
              <iframe 
                src={widgetUrl}
                title="Audaris Fahrzeug Widget"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video w-full flex items-center justify-center bg-[#F1F0FB] border border-dashed border-primary/30 rounded-lg">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Audaris Widget Platzhalter</h3>
                <p className="text-muted-foreground mb-4">
                  Fügen Sie hier Ihren Audaris Widget-Link ein, um Ihre Fahrzeuge anzuzeigen.
                </p>
                <p className="text-sm text-primary">
                  Das tatsächliche Widget wird hier angezeigt, sobald der Link hinzugefügt wurde.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card reveal-animation">
            <h3 className="text-xl font-bold mb-2">Qualitätsgeprüft</h3>
            <p className="text-muted-foreground">Alle Fahrzeuge durchlaufen eine gründliche Inspektion, bevor sie in unser Angebot aufgenommen werden.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card reveal-animation delay-1">
            <h3 className="text-xl font-bold mb-2">Transparente Historie</h3>
            <p className="text-muted-foreground">Wir bieten vollständige Fahrzeughistorien und Dokumentationen für jedes Fahrzeug in unserem Bestand.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card reveal-animation delay-2">
            <h3 className="text-xl font-bold mb-2">Garantierte Zufriedenheit</h3>
            <p className="text-muted-foreground">Mit unserer Qualitätsgarantie kaufen Sie stets mit Sicherheit und Vertrauen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudarisWidget;
