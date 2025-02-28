import React, { useEffect, useRef } from "react";

// Globale Deklaration, damit TypeScript window.audarisWidget kennt
declare global {
  interface Window {
    audarisWidget?: any;
  }
}

const AudarisWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stelle sicher, dass der Container den erwarteten inneren Div enthält
    if (containerRef.current) {
      containerRef.current.innerHTML = `<div id="audaris-widget"></div>`;
    }

    // Entferne ein eventuell vorhandenes Script, um Duplikate zu vermeiden
    const existingScript = document.getElementById("audaris-widget-script");
    if (existingScript) {
      existingScript.remove();
    }

    // Erstelle ein neues Script-Element
    const script = document.createElement("script");
    script.id = "audaris-widget-script";
    script.src =
      "https://widget.x.cloud.audaris.icu/widget.js?cid=2479&wid=6581d1a6b55afe9e250751d4";
    script.async = true;
    script.onload = () => {
      console.log("Audaris Widget Script wurde geladen.");
      if (
        window.audarisWidget &&
        typeof window.audarisWidget.init === "function"
      ) {
        window.audarisWidget.init();
      }
    };

    // Hänge das Script in den <head> ein – so erhält es vollen Zugriff auf document
    document.head.appendChild(script);

    return () => {
      // Cleanup: Entferne das Script und räume den Container auf
      const scriptToRemove = document.getElementById("audaris-widget-script");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section id="fahrzeuge" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
            Unser Angebot
          </span>
          <h2 className="section-title">Entdecken Sie unsere Fahrzeuge</h2>
          <p className="section-subtitle">
            Hier finden Sie unser aktuelles Angebot an sorgfältig ausgewählten
            Gebrauchtwagen – mit TÜV, Garantie und einem lückenlosen Servicepaket.
          </p>
        </div>

        <div
          className="bg-secondary rounded-xl p-4 shadow-sm overflow-hidden"
          style={{ minHeight: "600px" }} // Container-Höhe auf mindestens 600 Pixel
        >
          {/* Hier wird das Widget eingefügt */}
          <div ref={containerRef} className="w-full h-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
            <h3 className="text-xl font-bold mb-2">Qualitätsgeprüft</h3>
            <p className="text-muted-foreground">
              Alle Fahrzeuge durchlaufen eine gründliche Inspektion, bevor sie in
              unser Angebot aufgenommen werden.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
            <h3 className="text-xl font-bold mb-2">Transparente Historie</h3>
            <p className="text-muted-foreground">
              Wir bieten vollständige Fahrzeughistorien und Dokumentationen für
              jedes Fahrzeug in unserem Bestand.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
            <h3 className="text-xl font-bold mb-2">Garantierte Zufriedenheit</h3>
            <p className="text-muted-foreground">
              Mit unserer Qualitätsgarantie kaufen Sie stets mit Sicherheit und
              Vertrauen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudarisWidget;
