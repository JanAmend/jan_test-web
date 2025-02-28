
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MIVAL</h3>
            <p className="text-muted-foreground mb-6">
              Ihr vertrauenswürdiger Partner im Gebrauchtwagenhandel mit erstklassigem Service und transparenter Abwicklung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Startseite</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Unsere Leistungen</a></li>
              <li><a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">Unsere Partner</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Kundenstimmen</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontaktieren Sie uns</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Wappersdorfer Str. 59, 92360 Mühlhausen</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+4900012345" className="text-muted-foreground hover:text-primary transition-colors">+49 176 23509453</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:kontakt@gebr_autoexperte.de" className="text-muted-foreground hover:text-primary transition-colors">kontakt@mival.de</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Montag - Freitag:</span>
                <span>09:00 - 18:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Samstag:</span>
                <span>10:00 - 14:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sonntag:</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} MIVAL. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            <a href="#legal" className="hover:text-primary transition-colors">Impressum</a> | 
            <a href="#legal" className="hover:text-primary transition-colors ml-3">Datenschutz</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
